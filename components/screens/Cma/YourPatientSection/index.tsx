import styles from "../Cma.module.scss";
import Patient from "../Patient";

const YourPatientSection = () => {
  return (
    <section className={"yourPatient"}>
      <p className={styles.title}>Выбирите кто ваш поциент:</p>
      <div className={styles.patients}>
        <Patient />
        <Patient />
      </div>
    </section>
  );
};
export default YourPatientSection;
