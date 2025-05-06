import "./skills.css";
const Skills = () => {

    return (
        <section id="skills">
            <div className="skills__title">
                <img src="/static/bx-code-alt.svg" alt="" />
                <h2>Skills</h2>
            </div>
            <div className="skills__content">
                    <span className="skill_item hover">
                        <img src="/static/html-5-logo-svgrepo-com.svg" alt="html" title="html" />
                        <span class="texto-hover">HTML</span>
                    </span>

                    <span className="skill_item hover">
                        <img src="/static/css-3-svgrepo-com.svg" alt="css" />
                        <span class="texto-hover">CSS</span>
                    </span>

                    <span className="skill_item hover">
                        <img src="/static/javascript-svgrepo-com.svg" alt="javascript" />
                        <span class="texto-hover">JavaScript</span>
                    </span> 

                    <span className="skill_item hover">
                        <img src="/static/typescript-svgrepo-com.svg" alt="typescript" />
                        <span class="texto-hover">TypeScript</span>
                    </span>

                    <span className="skill_item hover">
                        <img src="/static/react-svgrepo-com.svg" alt="react" />
                        <span class="texto-hover">React</span>
                    </span>

                    <span className="skill_item hover">
                        <img src="/static/nodejs-icon-svgrepo-com.svg" alt="nodejs" />
                        <span class="texto-hover">NodeJS</span>
                    </span> 

                    <span className="skill_item hover">
                        <img src="/static/tailwind-svgrepo-com.svg" alt="tailwind" />
                        <span class="texto-hover">TailwindCss</span>
                    </span>

                    <span className="skill_item hover">
                        <img src="/static/bootstrap.svg" alt="bootstrap" />
                        <span class="texto-hover">Bootstrap</span>
                    </span>

                    <span className="skill_item hover">
                        <img src="/static/git-svgrepo-com.svg" alt="git" />
                        <span class="texto-hover">Git</span>
                    </span>

                    <span className="skill_item hover">
                        <img src="/static/mysql-icon.svg" alt="mysql" />
                        <span class="texto-hover">MySQL</span>
                    </span>

                    <span className="skill_item hover">
                        <img src="/static/mongo.svg" alt="mongodb" />
                        <span class="texto-hover">MongoDB</span>
                    </span>

                    <span className="skill_item hover">
                        <img src="/static/sqlite-icon.svg" alt="sqlite" />
                        <span class="texto-hover">SQLite</span>
                    </span>
                    <span className="skill_item hover">
                        <img src="/static/firebase.svg" alt="sqlite" />
                        <span class="texto-hover">Firebase</span>
                    </span>
                    <span className="skill_item hover">
                        <img src="/static/windows.svg" alt="windows" />
                        <span class="texto-hover">Windows</span>
                    </span>
            </div>
        </section>
    )
}

export { Skills }