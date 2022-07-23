import { useEffect, useMemo, useState } from "react";
import cls from "classnames";
import Days from "./components/Days";
import Fee from "./components/Fee";
import Times from "./components/Times";
import Spinner from "../Spinner";

import { queryDoctorData } from "../../services/api";
import { DoctorScheduale } from "./types";

import styles from "./appointment.module.scss";



const Appointment = () => {
    const [selectedDay, setSelectedDay] = useState<{date:string, index: number} | null>(null);
    const [selectedTime, setSelectedTime] = useState<{ from_unix: number, to_unix: number} | null>(null);
    const [schedualeList, setSchedualeList] = useState<DoctorScheduale[] | undefined>();
    const [Loading, setLoading] = useState<string>('');
  
    const onSelectDay = ({ date, index }: { date: string, index: number }): void => {        
        setSelectedDay({date, index})
    }

    const fetchDoctorData = async() => {
        setLoading("FETCH_DATA");
        const data = await queryDoctorData();
        
        const schedule = JSON.parse(data).schedule;
        setSchedualeList(schedule)
        setLoading("");
    }
    useEffect(() => {
        fetchDoctorData()
    }, [])

    const getTimes = useMemo(() => {
        if (!selectedDay) return [];

        const available =schedualeList?.[selectedDay.index as number].available || [];
        const unavailable =schedualeList?.[selectedDay.index as number].unavailable?.map(item => ({ ...item, isUnAvailable: true})) || [];
        
        const times = [...available, ...unavailable].sort((a, b) => {
            if (a.from_unix < b.from_unix) {
                return -1;
            }
            if (a.from_unix > b.from_unix) {
                return 1;
            }
            return 0;
        })
        
        return times;

    }, [selectedDay])

    const onSelectTime = ({ from_unix, to_unix }: {
        from_unix: number,
        to_unix: number
    }) => {
        setSelectedTime({ from_unix, to_unix })
    }

    const fakeRequest = () => {
        return new Promise((resolve) => {
            return setTimeout(() => {
                resolve(true)
            }, 2000);
        })
    }

    const handleBooking = async() => {
        setLoading("HANDLE_BOOKING");
        await fakeRequest();
        setLoading("")
    }
    
    return (
        <div className={styles.appointmentWrapper}>
            <div className={styles.appointment}>
                <Fee fee={selectedDay ? `${schedualeList?.[selectedDay.index as number].availability?.total}$` : ""} />
                {Loading === "FETCH_DATA" ? <Spinner /> : <Days onSelectDay={onSelectDay} selectedDay={selectedDay?.date} schedule={schedualeList} />}
                <Times 
                    onSelectTime={onSelectTime}
                    times={getTimes} 
                    selectedTime={selectedTime}
                />
            </div>
            <button onClick={handleBooking} className={cls(styles.bookBtn, {
                [styles.inActive]: !selectedDay || !selectedTime
            })}>
                {Loading === "HANDLE_BOOKING" ? <Spinner color="#fff" height={10} /> : "Book Appointment"}
            </button>
        </div>
    )

}
export default Appointment;
