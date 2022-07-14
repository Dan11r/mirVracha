import { FC, PropsWithChildren, useEffect, useRef } from "react";
import Image from "next/image";

import woman from "./../../../../public/woman.jpg";

import styles from "./MerryGoRound.module.scss";
import MerryGoRoundItem from "./MerryGoRoundItem";

type ICoordinate = Array<{
  x: number;
  y: number;
}>;

type TCalculateCoordinate = (
  count: number,
  r: number,
  cx?: number,
  cy?: number,
) => ICoordinate;

const calculateCoordinate: TCalculateCoordinate = (
  count,
  r,
  cx = 100,
  cy = 100,
) => {
  const sectors = [];
  let startAngle = -90;
  let endAngle = 0;
  let maxCard = count;
  for (let i = 0; i < count; i++) {
    if (i <= maxCard - 1) {
      const angle = 360 / maxCard;
      endAngle += angle;
      const rad = Math.PI / 180;
      const x = cx + r * Math.cos(startAngle * rad);
      const y = cy + r * Math.sin(startAngle * rad);
      startAngle += angle;
      sectors.push({ x, y });
    }
  }
  return sectors;
};
const MerryGoRound: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    let coordinates: ICoordinate;

    if (Array.isArray(children)) {
      coordinates = calculateCoordinate(children?.length, 315, 315, 315);
    }

    // @ts-ignore
    const items: Array<HTMLElement> = ref.current?.childNodes;
    items.forEach((item, index) => {
      item.style.transform = "translate(-50%, 50%)";
      item.style.left = `${coordinates[index]?.x}px`;
      item.style.bottom = `${coordinates[index]?.y}px`;
    });
  }, [ref.current, children]);
  return (
    <div className={styles.merryGoRound}>
      <div className={styles.center}>
        <h5 className={styles.title}>Взрослый</h5>
        <Image
          height={350}
          width={350}
          layout={"fixed"}
          src={woman}
          placeholder="blur"
        />
      </div>
      <ul ref={ref} className={styles.items}>
        {children}
      </ul>
    </div>
  );
};

export default MerryGoRound;
