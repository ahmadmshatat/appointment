import { BeatLoader } from 'react-spinners';
import styles from "./spinner.module.scss";

const Spinner = ({ height, color }: { height?: number | string, color?: string}) => {
    return (
        <div style={{
            minHeight: height
        }} className={styles.spinnerWrapper}>
            <BeatLoader color={color || '#000'} />
        </div>
    )
}

export default Spinner;