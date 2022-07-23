
export interface TimesProps {
    times: Time[] | undefined, 
    onSelectTime: (args: {
        from_unix: number,
        to_unix: number
    }) => void, 
    selectedTime: Time | null,
    selectedDay?: string
}

interface Time {
    from_unix: number, 
    to_unix: number, 
    isUnAvailable?: Boolean
}