import type { PatientStatus } from "./patientStatus";
import type { Visit } from "./visit";

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    studyId: string;
    status: PatientStatus;
    lastVisit?: Visit;
    visitSchedule: Visit[];
}