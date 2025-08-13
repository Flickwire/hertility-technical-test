import { Request, Response } from "express";
import { fetchResults, fetchNormalRanges } from "../services/results";

export const resultsHandler = async (_req: Request, res: Response) => {
    const results = await fetchResults();
    const normalRanges = await fetchNormalRanges();
    for (let i=0; i<results.length; i++) {
        const result = results[i]!;
        for (let j=0; j<result.hormoneResults.length; j++) {
            const hormoneResult = result!.hormoneResults[j]!;
            const normalRange = normalRanges[hormoneResult.code];
            if (!normalRange) {
                console.warn('Unknown Hormone', hormoneResult.code);
                continue;
            }
            if (normalRange.min > hormoneResult.value) {
                hormoneResult.range = 'BELOW';
            } else if (normalRange.max < hormoneResult.value) {
                hormoneResult.range = 'ABOVE';
            } else {
                hormoneResult.range = 'NORMAL';
            }
        }
    }
    res.send(results);
};
