export interface Availability {
    day: string;
    month: string;
    date: string;
    total?: number;
}

export interface DoctorScheduale {
    availability: Availability;
    available: { from_unix: number, to_unix: number }[]
    unavailable: { from_unix: number, to_unix: number,  }[]
}