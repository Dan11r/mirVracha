import SymptomSection from "./SymptomsSection";
import YourPatientSection from "./YourPatientSection";

import styles from "./Cma.module.scss";
const Cma = () => {
  return (
    <div className={styles.CpaWrapper}>
      <h2>А вдруг СМА</h2>
      <div className={styles.container}>
        <YourPatientSection />
        <SymptomSection />
      </div>
    </div>
  );
};

export default Cma;
