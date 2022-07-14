import Image, { StaticImageData } from "next/image";

import styles from "./Patient.module.scss";
import { FC } from "react";

interface IPatient {
  infoArray: string[];
  title: string;
  image: StaticImageData;
}

const Patient: FC<IPatient> = ({ infoArray, image, title }) => {
  return (
    <div className={styles.patient}>
      <p className={styles.title}>{title}</p>
      <Image
        height={300}
        width={300}
        layout={"fixed"}
        src={image}
        placeholder="blur"
      />
      {infoArray?.map((i, index) => (
        <p key={i + index} className={styles.info}>
          {i}
        </p>
      ))}
    </div>
  );
};

export default Patient;
