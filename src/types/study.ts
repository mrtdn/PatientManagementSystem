import type { StudyPhase } from "./studyPhase";

export interface Study {
    id: string;
    title: string;
    protocolId: string;
    sponsor: string;
    phase: StudyPhase;
}