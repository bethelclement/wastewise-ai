import KNN from 'ml-knn';

// Mock/Trained Prediction Models for the Showcase
// In a real MVP, this would run over thousands of rows.
// We are simulating an ML KNN classification for "Overflow Risk" (0-100) and Priority (Low, Moderate, High, Critical).

type ReportInput = {
    urgency: string; // 'Low' | 'Medium' | 'High' | 'Critical'
    daysOld: number;
    wasteTypeSeverity: number; // 0-10
    missedPickupCount: number;
}

// Map urgency string to number for KNN input
export const urgencyLevelToScore = (level: string) => {
    switch (level.toLowerCase()) {
        case 'low': return 1;
        case 'medium': return 2;
        case 'high': return 3;
        case 'critical': return 4;
        default: return 1;
    }
}

// Map waste type to severity score
export const wasteTypeToSeverity = (type: string) => {
    const map: Record<string, number> = {
        'organic waste': 6,
        'mixed household waste': 4,
        'plastic waste': 3,
        'recyclables': 2,
        'illegal dumping': 8,
        'missed pickup': 9,
        'bin overflow': 10
    }
    return map[type.toLowerCase()] || 5;
}

// Simulated Historical Data for Training
const historicalData: ReportInput[] = [
    { urgency: 'Low', daysOld: 1, wasteTypeSeverity: 2, missedPickupCount: 0 },
    { urgency: 'Medium', daysOld: 2, wasteTypeSeverity: 4, missedPickupCount: 1 },
    { urgency: 'High', daysOld: 4, wasteTypeSeverity: 6, missedPickupCount: 2 },
    { urgency: 'Critical', daysOld: 7, wasteTypeSeverity: 9, missedPickupCount: 4 },
    { urgency: 'High', daysOld: 1, wasteTypeSeverity: 10, missedPickupCount: 1 },
];

const historicalOutputs = [
    0, // Low Priority
    1, // Moderate Priority
    2, // High Priority
    3, // Critical Priority
    2, // High Priority
];

// Initialize KNN
let knn: any = null;

export const getKnnModel = () => {
    if (!knn) {
        const inputs = historicalData.map(d => [
            urgencyLevelToScore(d.urgency),
            d.daysOld,
            d.wasteTypeSeverity,
            d.missedPickupCount
        ]);
        knn = new KNN(inputs, historicalOutputs, { k: 2 });
    }
    return knn;
}

// Calculate an intelligent score from 0-100 and a label
export const calculatePriority = (report: { urgency: string; createdAt: Date; wasteType: string; area: string }, missedPickups: number = 0) => {
    const daysOld = Math.max(0, Math.floor((Date.now() - new Date(report.createdAt).getTime()) / (1000 * 60 * 60 * 24)));
    const severity = wasteTypeToSeverity(report.wasteType);
    const urgencyObjScore = urgencyLevelToScore(report.urgency);

    // Use KNN to predict class
    const model = getKnnModel();
    const predictionClass = model.predict([urgencyObjScore, daysOld, severity, missedPickups]);

    const labels = ['Low', 'Moderate', 'High', 'Critical'];
    const baseLabel = labels[predictionClass] || 'Low';

    // Calculate continuous risk score (0-100) using weighted heuristics
    let score = (urgencyObjScore * 10) + (daysOld * 3) + (severity * 3) + (missedPickups * 10);
    score = Math.min(100, Math.max(0, score + Math.random() * 5)); // Add small variance for realistic demo

    // Generate natural language insight
    let insight = `${report.area} prediction: priority score is stable.`;
    if (score > 80) insight = `${report.area} is showing high overflow risk due to ${report.wasteType.toLowerCase()} accumulation and urgency level.`;
    if (missedPickups > 2) insight = `${report.area} needs immediate supervisor attention due to repeated missed pickups.`;

    return {
        riskScore: Math.round(score),
        label: baseLabel,
        insight
    }
}
