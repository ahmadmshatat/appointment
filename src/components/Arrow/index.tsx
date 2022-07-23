import { CustomArrowProps } from "./types";

import styles from "./arrow.module.scss";

const Arrow = (props: CustomArrowProps) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.customArrow}`}
            onClick={onClick} />
    );
}

export default Arrow;