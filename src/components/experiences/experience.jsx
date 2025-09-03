import { useTranslation } from "react-i18next";
import "../../i18n";
import "../proyects/proyects.css"
import  "./experience.css"

const Experience = () => {

      const {t} = useTranslation();
  
  return (
    <section id="experience">
      <div className="experience-title">
        <img src="/static/bx-briefcase.svg" alt="" />
        <h2>{t("Experience")}</h2>
      </div>
      <div className="proyects__item">
                    <div className="proyects__item-img">
                        <img src="/static/bauer.png" alt="Landing Page" />
                    </div>
                    <div className="proyects__item-content">
                        <h3>Bauer Interior Designs - Landing Page</h3>
                        <ul className="proyects__item-tech">
                            <span className="html"><img src="/static/bxl-html5.svg" alt="" />HTML</span>
                            <span className="js"><img src="./static/bxl-javascript.svg" alt="" />Javascript</span>
                        </ul>
                        <p>{t("BauerDescription")}</p>
                        <ul className="proyects__item-links">
                            <li>
                                <a href="https://github.com/MaximoVerdi/legado-automoviles" target="_blank">
                                    <img src="/static/bxl-github.svg" alt="Github" />Code
                                </a>
                            </li>
                            <li>
                                <a href="https://bauerinteriordesigns.com/" target="_blank">
                                    <img src="/static/bx-link.svg" alt="Preview web" />Preview
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
    </section>
  );
};

export { Experience };