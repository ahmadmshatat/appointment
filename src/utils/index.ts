import moment from "moment";
import { DifferentDates } from "./types";

export const differentDates = ({
    startDate, endDate
}: DifferentDates) => {
    const start = startDate ? moment(new Date(startDate)) : moment(new Date()); 
    const end = moment(new Date(endDate)); 
    
    const duration = moment.duration(end.diff(start));
    const days = duration.asDays();
    
    return Math.ceil(days);

}