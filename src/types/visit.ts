import type { VisitStatus } from "./visitStatus";

export interface Visit {
    id: string;
    visitName: string;
    scheduledDate: string;
    actualDate?: string;
    status: VisitStatus;
    notes?: string;
}