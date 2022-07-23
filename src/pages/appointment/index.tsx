import SchedualeAppointment from "../../components/appointment";
import styles from "./appointmment.module.scss";

export default function Appointment() {
    return (
        <main className={styles.pageWrapper}>
            <SchedualeAppointment />
        </main>
    )
}
