import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css"
export default function About() {
    return (
            <div className={styles.About} >
                <div className={styles.bloco2} >
                    <div className={styles.web} >
                        <img src="https://cdn-icons-png.freepik.com/256/3914/3914588.png?semt=ais_hybrid"  ></img>
                        <h3>web developer</h3>
                        <p className={styles.paragrafo}>developer front-and e back-and com três projetos pessoais.  </p>
                    </div>
                    <div className={styles.mobile}>
                        <img src="https://cdn-icons-png.freepik.com/256/3841/3841536.png?semt=ais_hybrid"></img>
                        <h3>mobile developer</h3>
                        <p className={styles.paragrafo} >front developer com um projeto feito em react native. </p>
                    </div>
                    <div className={styles.gamer} >
                        <img src="https://cdn-icons-png.freepik.com/256/15399/15399467.png?semt=ais_hybrid" alt="as"></img>
                        <h3>gamer developer</h3>
                        <p className={styles.paragrafo}> area de hobbie com um jogo simples feito na unreal engine motor de desenvolvimento de jogos,
                            com um curso completo na udemy
                        </p>
                </div>
            </div>
        </div>
    )
}

