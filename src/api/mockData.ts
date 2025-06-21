import type { Patient, SiteCoordinator } from "@/types";

// --- MOCK COORDINATORS ---
// A static list of site coordinators in the system.

export const mockCoordinators: SiteCoordinator[] = [
    {
        id: 'coord-001',
        name: 'Dr. Eleanor Vance',
        email: 'eleanor.vance@clinic.com',
        phone: '555-100-1001',
        studies: ['NCT-101-ALPHA', 'NCT-303-GAMMA'],
    },
    {
        id: 'coord-002',
        name: 'Ben Carter',
        email: 'ben.carter@clinic.com',
        phone: '555-100-1002',
        studies: ['NCT-202-BETA'],
    },
];

// --- MOCK PATIENTS ---
// A static list of 15 patients with diverse statuses and visit histories.

export const mockPatients: Patient[] = [
  {
    "id": "pat-001",
    "name": "Liam Smith",
    "dateOfBirth": "1985-05-20",
    "studyId": "NCT-101-ALPHA",
    "status": "Enrolled",
    "lastVisit": {
      "id": "visit-2-166",
      "visitName": "Week 8 Follow-up",
      "scheduledDate": "2025-05-13T08:00:00.000Z",
      "actualDate": "2025-05-13T09:15:00.000Z",
      "status": "Completed",
      "notes": "Vitals stable. Discussed importance of medication adherence."
    },
    "visitSchedule": [
      {
        "id": "visit-1-166",
        "visitName": "Screening Visit",
        "scheduledDate": "2025-04-15T08:00:00.000Z",
        "actualDate": "2025-04-15T08:45:00.000Z",
        "status": "Completed",
        "notes": "Patient meets all inclusion criteria."
      },
      {
        "id": "visit-2-166",
        "visitName": "Week 8 Follow-up",
        "scheduledDate": "2025-05-13T08:00:00.000Z",
        "actualDate": "2025-05-13T09:15:00.000Z",
        "status": "Completed",
        "notes": "Vitals stable. Discussed importance of medication adherence."
      },
      {
        "id": "visit-3-166",
        "visitName": "Week 16 Follow-up",
        "scheduledDate": "2025-07-08T08:00:00.000Z",
        "status": "Scheduled"
      }
    ]
  },
  {
    "id": "pat-002",
    "name": "Olivia Garcia",
    "dateOfBirth": "1992-11-08",
    "studyId": "NCT-202-BETA",
    "status": "Enrolled",
    "lastVisit": {
      "id": "visit-2-882",
      "visitName": "Week 4 Follow-up",
      "scheduledDate": "2025-05-28T09:30:00.000Z",
      "actualDate": "2025-05-29T09:25:00.000Z",
      "status": "Completed",
      "notes": "Blood samples collected successfully."
    },
    "visitSchedule": [
      {
        "id": "visit-1-882",
        "visitName": "Screening Visit",
        "scheduledDate": "2025-04-30T09:30:00.000Z",
        "actualDate": "2025-04-30T10:00:00.000Z",
        "status": "Completed",
        "notes": "Patient consented and enrolled."
      },
      {
        "id": "visit-2-882",
        "visitName": "Week 4 Follow-up",
        "scheduledDate": "2025-05-28T09:30:00.000Z",
        "actualDate": "2025-05-29T09:25:00.000Z",
        "status": "Completed",
        "notes": "Blood samples collected successfully."
      },
      {
        "id": "visit-3-882",
        "visitName": "Week 8 Follow-up",
        "scheduledDate": "2025-06-25T09:30:00.000Z",
        "status": "Scheduled"
      }
    ]
  },
  {
    "id": "pat-003",
    "name": "Noah Patel",
    "dateOfBirth": "1978-01-30",
    "studyId": "NCT-303-GAMMA",
    "status": "Completed",
    "lastVisit": {
      "id": "visit-4-455",
      "visitName": "End of Study Visit",
      "scheduledDate": "2025-03-10T11:00:00.000Z",
      "actualDate": "2025-03-10T11:05:00.000Z",
      "status": "Completed",
      "notes": "Patient has completed the study. All final assessments performed."
    },
    "visitSchedule": [
      {
        "id": "visit-1-455",
        "visitName": "Screening Visit",
        "scheduledDate": "2024-12-10T11:00:00.000Z",
        "actualDate": "2024-12-10T11:30:00.000Z",
        "status": "Completed"
      },
      {
        "id": "visit-2-455",
        "visitName": "Month 1",
        "scheduledDate": "2025-01-10T11:00:00.000Z",
        "actualDate": "2025-01-11T11:00:00.000Z",
        "status": "Completed"
      },
      {
        "id": "visit-3-455",
        "visitName": "Month 2",
        "scheduledDate": "2025-02-10T11:00:00.000Z",
        "actualDate": "2025-02-10T11:20:00.000Z",
        "status": "Completed"
      },
      {
        "id": "visit-4-455",
        "visitName": "End of Study Visit",
        "scheduledDate": "2025-03-10T11:00:00.000Z",
        "actualDate": "2025-03-10T11:05:00.000Z",
        "status": "Completed",
        "notes": "Patient has completed the study. All final assessments performed."
      }
    ]
  },
  {
    "id": "pat-004",
    "name": "Emma Zhang",
    "dateOfBirth": "2001-07-12",
    "studyId": "NCT-101-ALPHA",
    "status": "Screening",
    "lastVisit": undefined,
    "visitSchedule": [
      {
        "id": "visit-1-901",
        "visitName": "Screening Visit",
        "scheduledDate": "2025-06-28T14:00:00.000Z",
        "status": "Scheduled"
      }
    ]
  },
  {
    "id": "pat-005",
    "name": "James Nguyen",
    "dateOfBirth": "1965-09-02",
    "studyId": "NCT-202-BETA",
    "status": "Withdrawn",
    "lastVisit": {
      "id": "visit-1-332",
      "visitName": "Screening Visit",
      "scheduledDate": "2025-04-01T13:00:00.000Z",
      "actualDate": "2025-04-01T13:30:00.000Z",
      "status": "Completed"
    },
    "visitSchedule": [
      {
        "id": "visit-1-332",
        "visitName": "Screening Visit",
        "scheduledDate": "2025-04-01T13:00:00.000Z",
        "actualDate": "2025-04-01T13:30:00.000Z",
        "status": "Completed"
      },
      {
        "id": "visit-2-332",
        "visitName": "Week 4 Follow-up",
        "scheduledDate": "2025-04-29T13:00:00.000Z",
        "status": "Cancelled",
        "notes": "Patient withdrew consent due to personal reasons."
      }
    ]
  },
  {
    "id": "pat-006",
    "name": "Sophia Miller",
    "dateOfBirth": "1999-03-15",
    "studyId": "NCT-303-GAMMA",
    "status": "Screen Failed",
    "lastVisit": {
      "id": "visit-1-789",
      "visitName": "Screening Visit",
      "scheduledDate": "2025-05-18T10:00:00.000Z",
      "actualDate": "2025-05-18T10:25:00.000Z",
      "status": "Completed",
      "notes": "Patient did not meet inclusion criteria (Lab values out of range)."
    },
    "visitSchedule": [
      {
        "id": "visit-1-789",
        "visitName": "Screening Visit",
        "scheduledDate": "2025-05-18T10:00:00.000Z",
        "actualDate": "2025-05-18T10:25:00.000Z",
        "status": "Completed",
        "notes": "Patient did not meet inclusion criteria (Lab values out of range)."
      }
    ]
  },
  {
    "id": "pat-007",
    "name": "Mateo Rodriguez",
    "dateOfBirth": "1988-08-25",
    "studyId": "NCT-101-ALPHA",
    "status": "Enrolled",
    "lastVisit": {
      "id": "visit-2-111",
      "visitName": "Week 4",
      "scheduledDate": "2025-05-20T09:00:00.000Z",
      "status": "Missed",
      "notes": "Patient called to reschedule, cited transportation issues."
    },
    "visitSchedule": [
      {
        "id": "visit-1-111",
        "visitName": "Screening",
        "scheduledDate": "2025-04-22T09:00:00.000Z",
        "actualDate": "2025-04-22T09:40:00.000Z",
        "status": "Completed"
      },
      {
        "id": "visit-2-111",
        "visitName": "Week 4",
        "scheduledDate": "2025-05-20T09:00:00.000Z",
        "status": "Missed",
        "notes": "Patient called to reschedule, cited transportation issues."
      },
      {
        "id": "visit-3-111",
        "visitName": "Week 4 (Rescheduled)",
        "scheduledDate": "2025-05-27T10:30:00.000Z",
        "status": "Scheduled"
      }
    ]
  },
  {
    "id": "pat-008",
    "name": "Isabella Lee",
    "dateOfBirth": "1995-12-01",
    "studyId": "NCT-202-BETA",
    "status": "Enrolled",
     "lastVisit": {
      "id": "visit-1-222",
      "visitName": "Screening Visit",
      "scheduledDate": "2025-06-02T11:00:00.000Z",
      "actualDate": "2025-06-02T11:15:00.000Z",
      "status": "Completed",
      "notes": "Patient is in good spirits and eager to participate."
    },
    "visitSchedule": [
       {
        "id": "visit-1-222",
        "visitName": "Screening Visit",
        "scheduledDate": "2025-06-02T11:00:00.000Z",
        "actualDate": "2025-06-02T11:15:00.000Z",
        "status": "Completed",
        "notes": "Patient is in good spirits and eager to participate."
      },
       {
        "id": "visit-2-222",
        "visitName": "Week 4 Follow-up",
        "scheduledDate": "2025-06-30T11:00:00.000Z",
        "status": "Scheduled"
      }
    ]
  },
  {
    "id": "pat-009",
    "name": "Lucas Wilson",
    "dateOfBirth": "1977-06-18",
    "studyId": "NCT-101-ALPHA",
    "status": "Enrolled",
    "lastVisit": {
      "id": "visit-3-998",
      "visitName": "Follow-up 2",
      "scheduledDate": "2025-04-10T15:00:00.000Z",
      "actualDate": "2025-04-10T15:00:00.000Z",
      "status": "Completed",
      "notes": "No adverse events reported."
    },
    "visitSchedule": [
      {
        "id": "visit-1-998",
        "visitName": "Screening",
        "scheduledDate": "2025-02-10T15:00:00.000Z",
        "actualDate": "2025-02-10T15:00:00.000Z",
        "status": "Completed"
      },
      {
        "id": "visit-2-998",
        "visitName": "Follow-up 1",
        "scheduledDate": "2025-03-10T15:00:00.000Z",
        "actualDate": "2025-03-10T15:00:00.000Z",
        "status": "Completed"
      },
      {
        "id": "visit-3-998",
        "visitName": "Follow-up 2",
        "scheduledDate": "2025-04-10T15:00:00.000Z",
        "actualDate": "2025-04-10T15:00:00.000Z",
        "status": "Completed",
        "notes": "No adverse events reported."
      },
       {
        "id": "visit-4-998",
        "visitName": "Follow-up 3",
        "scheduledDate": "2025-05-10T15:00:00.000Z",
        "status": "Missed"
      }
    ]
  },
  {
    "id": "pat-010",
    "name": "Mia Chen",
    "dateOfBirth": "2000-02-22",
    "studyId": "NCT-303-GAMMA",
    "status": "Screening",
    "lastVisit": undefined,
    "visitSchedule": [
      {
        "id": "visit-1-555",
        "visitName": "Screening Visit",
        "scheduledDate": "2025-07-01T16:00:00.000Z",
        "status": "Scheduled"
      }
    ]
  },
   {
    "id": "pat-011",
    "name": "Zoe Kim",
    "dateOfBirth": "1994-10-14",
    "studyId": "NCT-202-BETA",
    "status": "Completed",
    "lastVisit": {
      "id": "visit-4-231",
      "visitName": "End of Study",
      "scheduledDate": "2025-02-15T09:00:00.000Z",
      "actualDate": "2025-02-15T09:00:00.000Z",
      "status": "Completed"
    },
    "visitSchedule": [
       { "id": "visit-1-231", "visitName": "Screening", "scheduledDate": "2024-11-15T09:00:00.000Z", "actualDate": "2024-11-15T09:00:00.000Z", "status": "Completed" },
       { "id": "visit-2-231", "visitName": "Week 4", "scheduledDate": "2024-12-15T09:00:00.000Z", "actualDate": "2024-12-14T09:00:00.000Z", "status": "Completed" },
       { "id": "visit-3-231", "visitName": "Week 8", "scheduledDate": "2025-01-15T09:00:00.000Z", "actualDate": "2025-01-15T09:00:00.000Z", "status": "Completed" },
       { "id": "visit-4-231", "visitName": "End of Study", "scheduledDate": "2025-02-15T09:00:00.000Z", "actualDate": "2025-02-15T09:00:00.000Z", "status": "Completed" }
    ]
  },
  {
    "id": "pat-012",
    "name": "Daniel Taylor",
    "dateOfBirth": "1981-04-05",
    "studyId": "NCT-101-ALPHA",
    "status": "Withdrawn",
    "lastVisit": { "id": "visit-1-888", "visitName": "Screening", "scheduledDate": "2025-03-03T12:00:00.000Z", "actualDate": "2025-03-03T12:00:00.000Z", "status": "Completed" },
    "visitSchedule": [
      { "id": "visit-1-888", "visitName": "Screening", "scheduledDate": "2025-03-03T12:00:00.000Z", "actualDate": "2025-03-03T12:00:00.000Z", "status": "Completed" },
      { "id": "visit-2-888", "visitName": "Baseline", "scheduledDate": "2025-03-10T12:00:00.000Z", "status": "Cancelled", "notes": "Patient moved out of state." }
    ]
  },
  {
    "id": "pat-013",
    "name": "Layla Roy",
    "dateOfBirth": "1998-09-19",
    "studyId": "NCT-202-BETA",
    "status": "Screen Failed",
    "lastVisit": { "id": "visit-1-991", "visitName": "Screening Visit", "scheduledDate": "2025-06-10T10:30:00.000Z", "actualDate": "2025-06-10T10:30:00.000Z", "status": "Completed", "notes": "Screen fail: patient has a confounding comorbidity." },
    "visitSchedule": [
      { "id": "visit-1-991", "visitName": "Screening Visit", "scheduledDate": "2025-06-10T10:30:00.000Z", "actualDate": "2025-06-10T10:30:00.000Z", "status": "Completed", "notes": "Screen fail: patient has a confounding comorbidity." }
    ]
  },
  {
    "id": "pat-014",
    "name": "Kai Gonzalez",
    "dateOfBirth": "1990-11-30",
    "studyId": "NCT-303-GAMMA",
    "status": "Enrolled",
    "lastVisit": { "id": "visit-1-776", "visitName": "Screening", "scheduledDate": "2025-06-05T08:30:00.000Z", "actualDate": "2025-06-05T08:30:00.000Z", "status": "Completed" },
    "visitSchedule": [
      { "id": "visit-1-776", "visitName": "Screening", "scheduledDate": "2025-06-05T08:30:00.000Z", "actualDate": "2025-06-05T08:30:00.000Z", "status": "Completed" },
      { "id": "visit-2-776", "visitName": "Month 1", "scheduledDate": "2025-07-05T08:30:00.000Z", "status": "Scheduled" }
    ]
  },
  {
    "id": "pat-015",
    "name": "Henry Lopez",
    "dateOfBirth": "1983-02-11",
    "studyId": "NCT-101-ALPHA",
    "status": "Enrolled",
    "lastVisit": undefined,
    "visitSchedule": [
      { "id": "visit-1-432", "visitName": "Screening", "scheduledDate": "2025-06-22T13:00:00.000Z", "status": "Scheduled" }
    ]
  }
];