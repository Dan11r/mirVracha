import styles from "./MerryGoRound.module.scss";
import { useEffect, useRef } from "react";

type TCalculateCoordinate = (
  count: number,
  r: number,
  cx?: number,
  cy?: number,
) => Array<{
  x: number;
  y: number;
}>;

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
const MerryGoRound = () => {
  const ref = useRef(null);

  useEffect(() => {
    const coordinates = calculateCoordinate(6, 100);

    // @ts-ignore
    const items: Array<HTMLElement> = ref.current?.childNodes;
    items.forEach((item, index) => {
      item.style.height = "20px";
      item.style.width = "20px";
      item.style.position = "absolute";
      item.style.backgroundColor = "blue";
      item.style.transform = "translate(-50%, 50%)";
      item.style.left = `${coordinates[index]?.x}px`;
      item.style.bottom = `${coordinates[index]?.y}px`;
    });
  }, [ref.current]);
  return (
    <div className={styles.merryGoRound}>
      <div className={styles.center} />
      <ul ref={ref} className={styles.items}>
        <li className={styles.item} />
        <li className={styles.item} />
        <li className={styles.item} />
        <li className={styles.item} />
        <li className={styles.item} />
        <li className={styles.item} />
      </ul>
    </div>
  );
};

export default MerryGoRound;
