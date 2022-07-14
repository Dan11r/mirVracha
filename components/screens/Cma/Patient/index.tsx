import Image from "next/image";
import image from "../../../../public/image.png";

const Patient = () => {
  return (
    <div className="patient">
      <p className={"title"}>Взрослый</p>
      <Image
        height={300}
        width={300}
        layout={"fixed"}
        src={image}
        placeholder="blur"
      />
      <p>
        Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом
        возрасте.
      </p>
      <p>
        По сравнению с СМА у детей, СМА у взрослых может иметь более легкие
        симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа
        неуклонно теряют двигательные навыки.
      </p>
      <p>
        По сравнению с СМА в детстве, течение СМА у взрослых может быть более
        коварным и трудным для распознавания.
      </p>
    </div>
  );
};

export default Patient;
