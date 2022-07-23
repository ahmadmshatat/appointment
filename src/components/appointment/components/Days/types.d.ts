export interface Availability {
    day: string;
    month: string;
    date: string;
}

export interface DoctorScheduale {
    availability: Availability;
}


export interface DaysProps {
    schedule: DoctorScheduale[] | undefined;
    selectedDay: string | undefined;
    onSelectDay: (arg: {date: string, index: number}) => void
}