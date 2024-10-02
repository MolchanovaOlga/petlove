import sprite from "../../assets/sprite.svg";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <span className={css.logoText}>petl</span>
      <svg className={css.iconHeart} width="20" height="20">
        <use href={`${sprite}#icon-heart-logo`}></use>
      </svg>
      <span className={css.logoText}>ve</span>
    </div>
  );
};

export default Logo;
