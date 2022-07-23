import { CustomArrowProps } from "./types";
import cls from "classnames";

import styles from "./arrow.module.scss";

const Arrow = (props: CustomArrowProps) => {
    const { className, onClick, isPrev } = props;
    const ArrowClassName = cls(className, styles.customArrow, {
        [styles.prevArrow]: isPrev
    })
    return (
        <div className={ArrowClassName}
            onClick={onClick} />
    );
}

export default Arrow;