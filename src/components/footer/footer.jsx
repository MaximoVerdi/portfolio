import { useTranslation } from "react-i18next";
import "../../i18n";
import "./footer.css";

const Footer = () => {
    const { t } = useTranslation();

  return (
    <>
        <ul className="footer__nav">
            <nav className="footer__nav-list">
                <li className="footer__nav-item">
                    <a href="#">{t("Inicio")}</a>
                </li>
                <li className="footer__nav-item">
                    <a href="#">{t("Proyectos")}</a>
                </li>
                <li className="footer__nav-item">
                    <a href="#">{t("Sobre mi")}</a>
                </li>
                <li className="footer__nav-item">
                    <a href="mailto:maximoverdi21@gmail.com">{t("Contactame")}</a>
                </li>
            </nav>
        </ul>
        <hr />
        <ul className="footer">
            <ul className="footer__list-user">
                <img src="https://avatars.githubusercontent.com/u/186237024?v=4" alt="Foto de Maximo Verdi" />
                <span>Máximo Verdi</span>
            </ul>
            <ul className="footer__list-social">
                <li><a href="https://www.linkedin.com/in/maximoverdi/" target="_blank"><img src="./node_modules/boxicons/svg/logos/bxl-linkedin.svg" alt="" /></a></li>
                <li><a href="https://github.com/MaximoVerdi" target="_blank"><img src="./node_modules/boxicons/svg/logos/bxl-github.svg" alt="" /></a></li>
                <li><a href="https://www.linkedin.com/in/maximoverdi/" target="_blank"><img src="./node_modules/boxicons/svg/logos/bxl-instagram.svg" alt="" /></a></li>
            </ul>
        </ul>
    </>
  )
}

export { Footer };