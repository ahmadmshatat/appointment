import moment from 'moment';
import cls from "classnames";

import styles from "./times.module.scss";



const Times = ({ times, onSelectTime, selectedTime }: { onSelectTime: (args: {
    from_unix: number,
    to_unix: number
}) => void, selectedTime: { from_unix: number, to_unix: number } | null ,  times: {from_unix: number, to_unix: number, isUnAvailable?: Boolean}[] | undefined }) => {
    
    return (
        <div className={styles.timesWrapper}>
            <div className={styles.headline}>
                Choose time
            </div>
            <div className={styles.times}>
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
