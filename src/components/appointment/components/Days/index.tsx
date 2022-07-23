import React from "react";
import Slider from "react-slick";
import cls from "classnames";

import Arrow from "../../../Arrow";
import { DAYS } from "../../../../utils/constants";
import { differentDates } from "../../../../utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./days.module.scss";

import { DoctorScheduale, DaysProps } from "./types";



const Days = ({ schedule, selectedDay, onSelectDay }: DaysProps) => {
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 100,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow isPrev={true} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const checkIsValid = (date: string): Boolean => {
        let isValid = true;        
        const withinDays = differentDates({
            endDate: date.split('-').reverse().join('-')
        })
        if (withinDays <= 0 || withinDays > 30)
            isValid = false;
        
        return isValid       
    }

    return (
        <div className={styles.scheduale} >
            <div className={styles.headline}>
                Schedule
            </div>
            <div>
                <Slider {...settings}>
                    {schedule?.map((date: DoctorScheduale, index: number) => {
                        const isValid = checkIsValid(date.availability.date)

                        const daysCellClasses = cls(styles.dayCell, {
                            [styles.inActive]: !isValid,
                            [styles.activeDate]: selectedDay === date.availability.date
                        })
                        return(
                            <div  key={date.availability.date} className={styles.dayCellWrapper}>
                                <div className={daysCellClasses}
                                    role="buttom" onClick={() => onSelectDay({
                                        date: date.availability.date,
                                        index
                                    })}
                                >
                                    <div className={styles.day}>
                                        {DAYS[date.availability.day as keyof typeof DAYS]}
                                    </div>
                                    <div>
                                        {date.availability.month}
                                    </div>
                                    <div>
                                        {date.availability.date.split('-')[0]}
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </Slider>
            </div>
        </div>
    );

}
export default Days;
