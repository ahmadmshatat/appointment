import styles from "./fee.module.scss";



const Fee = ({fee}: {fee: string}) => {
    
    return (
        <div className={styles.feesWrapper}>
            <div className={styles.label}>
                Fee
            </div>
            <div className={styles.fees}>
                {fee}
            </div>
        </div>
    )

}
export default Fee;
