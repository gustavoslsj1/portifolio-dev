import Link from "next/link";
import styles from '../styles/skills.module.css'
function Skills() {
    return (
        <div className={styles.container} >
            <div className={styles.navbar}>
                <Link href='/' className={styles.home} > home </Link>
                <Link href='/About' className={styles.about}> About </Link>
            </div>
            <div className={styles.Skills}>
                <div className={styles.hardSkill}>
                    <h2 className={styles.h2}>Hard-Skills:</h2>
                    <ul className={styles.ul}>
                        <li>
                            <p className={styles.paragrafo}>react - react native - javascript - typescript - python - sql</p>
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
        </div>

    )
}

export default Skills;