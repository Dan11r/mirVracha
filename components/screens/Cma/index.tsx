import SymptomSection from "./SymptomsSection";
import YourPatientSection from "./YourPatientSection";

import styles from "./Cma.module.scss";
const Cma = () => {
  return (
    <div className={styles.CpaWrapper}>
      <h1>А вдруг СМА</h1>
      <YourPatientSection />
      <SymptomSection />
    </div>
  );
};

export default Cma;
