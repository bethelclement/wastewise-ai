declare module 'ml-knn' {
    export default class KNN {
        constructor(dataset: any[], labels: any[], options?: { k?: number; distance?: (...args: any[]) => number });
        predict(point: any[]): any;
    }
}
