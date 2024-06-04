import React from "react";
import "../styles/skills.css"
function Skills() {
    return (
        <div className="Skills">
            <div className="hard-skills">
                <h2 className="h2-skill">Hard-Skills:</h2>
                <ul className="ul-soft">
                    <li>
                    <p className="paragrafo">react - react native - javascript - typescript - python - sql</p>
                    </li>
                    <li>
                    <p className="paragrafo">ingles - intermediario </p>
                    </li>
                </ul>
            </div>
            <div className="soft-skills">
                <h2 className="h2-skill">Soft-Skills:</h2>
                <ul className="ul-soft">
                    <li>
                        <p className="paragrafo">proativo</p>
                    </li>
                    <li>
                        <p className="paragrafo">comunicativo</p>
                    </li>
                    <li>
                        <p className="paragrafo">aprendizado rapido</p>
                    </li>

                </ul>
            </div>
        </div>

    )
}

export default Skills;