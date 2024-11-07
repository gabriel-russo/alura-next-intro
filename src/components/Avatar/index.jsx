import Image from "next/image";
import style from "./avatar.module.css";

export const Avatar = ({name, imageSrc}) => {
  return (
    <ul className={style.avatar}>
      <li><Image className={style.avatar__image} src={imageSrc} width={32} height={32} alt={`Avatar do(a) ${name}`}/>
      </li>
      <li><span className={style.avatar__name}>@{name}</span></li>
    </ul>
  );

};
