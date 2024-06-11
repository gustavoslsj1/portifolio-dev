import styles from '../styles/skills.module.css'
import Navbar from "@components/Navbar";
export default function Skills() {
    return (
            <div className={styles.Skills}>
                <div className={styles.hardSkill}>
                    <h2 className={styles.h2}>Hard-Skills:</h2>
                    <ul className={styles.ul}>
                        <li>
                            <p className={styles.paragrafo}>linguagens:javascript - typescript - python - sql</p>
                        </li>
                        <li>
                            <p className={styles.paragrafo}>frameworks : react - react native - next.js </p>
                        </li>
                        <li>
                            <p className={styles.paragrafo}>ingles - intermediario </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.softSkills}>
                    <h2 className={styles.h2}>Soft-Skills:</h2>
                    <ul className={styles.ul}>
                        <li>
                            <p className={styles.paragrafo}>proativo</p>
                        </li>
                        <li>
                            <p className={styles.paragrafo}>comunicativo</p>
                        </li>
                        <li>
                            <p className={styles.paragrafo}>aprendizado rapido</p>
                        </li>
                    </ul>
            </div>
        </div>

    )
}
