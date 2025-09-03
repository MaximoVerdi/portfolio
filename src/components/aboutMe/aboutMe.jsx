import "./aboutMe.css";
import { useTranslation } from "react-i18next";
import "../../i18n";


const AboutMe = () => {
    const { t } = useTranslation();
    
    return (
        <section id="aboutMe">
            <div className="aboutMe__title">
                <img src="/static/bx-user.svg" alt="" />
                <h3>{t("Sobre mi")}</h3>
            </div>
            <div className="aboutMe__content">
                <div className="aboutMe__content-text">
                    <p dangerouslySetInnerHTML={{ __html: t("sobreMip1") }} />
                    <p dangerouslySetInnerHTML={{ __html: t("sobremip2") }} />
                </div>
                <img src="https://avatars.githubusercontent.com/u/186237024?v=4" alt="Foto de Maximo Verdi" />
            </div>
        </section>
    )
}

export { AboutMe };