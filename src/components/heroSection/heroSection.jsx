import "./heroSection.css";
import { useTranslation } from "react-i18next";
import "../../i18n"
import React from "react";

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section id="hero-section">
            <div className="hero-section__img">
                <img src="https://avatars.githubusercontent.com/u/186237024?v=4" alt="Foto de Maximo Verdi" />
            </div>
            <div className="hero-section__content">
                <h2 className="hero-section__title">Maximo Verdi</h2>
                <a className="dispo" href="https://www.linkedin.com/in/maximoverdi/" target="_blank">
                    {t("Disponible")}
                </a>
                <p dangerouslySetInnerHTML={{ __html: t("Descripción") }} />
                <ul>
                    <li><a href="https://github.com/MaximoVerdi" target="_blank"><img src="/static/bxl-github.svg" alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/in/maximoverdi/" target="_blank"><img src="/static/bxl-linkedin.svg" alt="" /></a></li>
                </ul>
                <a className="contact-btn" href="mailto:maximoverdi21@gmail.com">{t("Contactame")}</a>
            </div>
        </section>
    )
}

export { HeroSection }