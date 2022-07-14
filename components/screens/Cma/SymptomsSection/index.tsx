import MerryGoRound from "../MerryGoRound";

import MerryGoRoundItem from "../MerryGoRound/MerryGoRoundItem";
import head from "./../../../../public/head.png";
import scoliosis from "./../../../../public/scoliosis.png";
import man from "./../../../../public/man.png";
import lungs from "./../../../../public/lungs.png";
import legs from "./../../../../public/legs.png";
import bone from "./../../../../public/bone.png";
import hip from "./../../../../public/hip.png";
import woman2 from "./../../../../public/woman2.png";

import styles from "./SymptomsSection.module.scss";

const SymptomSection = () => {
  return (
    <section className={styles.symptoms}>
      <p className={styles.question}>
        Сообщает ли один из ваших пациентов о следующих симптомах?
        <a href="#">(нажмите на любую иконку и узнайте больше)</a>
      </p>
      <MerryGoRound>
        <MerryGoRoundItem
          textPosition={"bottom"}
          text={"Неспособность бегать, изменение походки"}
          image={legs}
        />
        <MerryGoRoundItem
          textPosition={"right"}
          text={"Дыхательная недостаточность/ респираторная дисфункция"}
          image={lungs}
        />
        <MerryGoRoundItem
          textPosition={"right"}
          text={"Нарушения жевания и глотания"}
          image={head}
        />
        <MerryGoRoundItem
          textPosition={"right"}
          text={"Ограниченная способность поднимать руки и переносить предметы"}
          image={man}
        />
        <MerryGoRoundItem
          textPosition={"top"}
          text={"Сколиоз"}
          image={scoliosis}
        />
        <MerryGoRoundItem
          textPosition={"left"}
          text={"Утомляемость"}
          image={woman2}
        />
        <MerryGoRoundItem
          textPosition={"left"}
          text={"Вывих бедра"}
          image={hip}
        />
        <MerryGoRoundItem
          textPosition={"left"}
          text={"Контрактура суставов"}
          image={bone}
        />
      </MerryGoRound>
    </section>
  );
};
export default SymptomSection;
