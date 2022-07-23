import moment from 'moment';
import cls from "classnames";
import { TimesProps } from "./types";
import styles from "./times.module.scss";



const Times = ({ times, onSelectTime, selectedTime, selectedDay }: TimesProps) => {
    
    return (
        <div className={styles.timesWrapper}>
            <div className={styles.headline}>
                Choose time
            </div>
            <div className={styles.times}>
                {!selectedDay && <div className={styles.note}>Please select day to view available times</div>}
                {selectedDay && !times?.length && <div className={styles.note}>No times at this day</div>}
                {times?.map((time: { from_unix: number, to_unix: number, isUnAvailable?: Boolean }, index: number) =>{
                    const timeClassName = cls(styles.time, {
                        [styles.inActive]: time.isUnAvailable,
                        [styles.active]: time.from_unix === selectedTime?.from_unix && time.to_unix === selectedTime?.to_unix
                    })
                    return(          
                        <div role="button" 
                            key={`${time.from_unix}_${time.to_unix}_${index}`} 
                            className={timeClassName}
                            onClick={() => onSelectTime({
                                from_unix: time.from_unix,
                                to_unix: time.to_unix
                            })}
                        >
                            {moment(time.from_unix * 1000).format('HH:mm A')}
                        </div>
                    )})}              
            </div>
        </div>
    )

}
export default Times;
