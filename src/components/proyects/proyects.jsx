import { useTranslation } from "react-i18next";
import "../../i18n";
import "./proyects.css";

const Proyects = () => {
    const { t, i18n } = useTranslation();
    
    const cambiarIdioma = () => {
        const nuevoIdioma = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(nuevoIdioma);
    };
    return (
        <section id="proyects">
            <div className="proyects__title">
                <img src="./node_modules/boxicons/svg/regular/bx-briefcase.svg" alt="" />
                <h2>{t("Proyectos")}</h2>
            </div>
            <div className="proyects__content">
                <div className="proyects__item">
                    <div className="proyects__item-img">
                        <img src="/public/static/hero-section.png" alt="Dashboard Financiero" />
                    </div>
                    <div className="proyects__item-content">
                        <h3>Fintrack Hub - {t("Dashboard")}</h3>
                        <ul className="proyects__item-tech">
                            <span className="react"><img src="./node_modules/boxicons/svg/logos/bxl-react.svg" alt="" />React</span>
                            <span className="js"><img src="./node_modules/boxicons/svg/logos/bxl-javascript.svg" alt="" />Javascript</span>
                        </ul>
                        <p>{t("DashboardDescription")}</p>
                        <ul className="proyects__item-links">
                            <li>
                                <a>
                                    <img src="./node_modules/boxicons/svg/logos/bxl-github.svg" alt="Github" />Code
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="./node_modules/boxicons/svg/regular/bx-link.svg" alt="Preview web" />Preview
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="proyects__item">
                    <div className="proyects__item-img">
                        <img src="/public/static/la-stock.png" alt="Dashboard Financiero" />
                    </div>
                    <div className="proyects__item-content">
                        <h3>Legado Automoviles - E-Commerce</h3>
                        <ul className="proyects__item-tech">
                            <span className="html"><img src="./node_modules/boxicons/svg/logos/bxl-html5.svg" alt="" />HTML</span>
                            <span className="js"><img src="./node_modules/boxicons/svg/logos/bxl-javascript.svg" alt="" />Javascript</span>
                        </ul>
                        <p>{t("LaDescription")}</p>
                        <ul className="proyects__item-links">
                            <li>
                                <a>
                                    <img src="./node_modules/boxicons/svg/logos/bxl-github.svg" alt="Github" />Code
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="./node_modules/boxicons/svg/regular/bx-link.svg" alt="Preview web" />Preview
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Proyects }