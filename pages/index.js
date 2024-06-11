import Navbar from '@components/Navbar'
import styles from '../styles/index.module.css'
import Head from 'next/head'
export default function index() {
  return (
      <div className={styles.Home}>
        <Head>
          <title>pagina principal</title>
        </Head>
        <p className={styles.welcome}>bem-vindo</p>
        <h2 className={styles.texto}>Oi, eu sou</h2>
        <h1 className={styles.destacado}> Gustavo Lima</h1>
        <h2 className={styles.texto}> e sou um web Developer.</h2>
        <h4>apresento-lhes meu portifolio feito em javascript no framework react.</h4>
        <h3 className={styles.contato}>Formas de contato:</h3>
        <ul className={styles.ul}>
          <li>
            <a href='https://wa.me/qr/OQOIPGCJ5H5VJ1' >
              <img src="https://img.icons8.com/?size=50&id=16733&format=png" alt="whatsap" className={styles.icones}></img>
            </a></li>
          <li >
            <a href="https://github.com/gustavoslsj1" >
              <img src="https://img.icons8.com/?size=50&id=12599&format=png" alt="github" className={styles.icones}></img>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gust_gusty_/">
              <img src="https://img.icons8.com/?size=50&id=32309&format=png" alt="instagram" className={styles.icones}></img>
            </a></li>
          <li>
            <a href='https://www.linkedin.com/in/gustavo-lima-544b17230/'>
              <img src="https://img.icons8.com/?size=50&id=8808&format=png" alt="linkedin" className={styles.icones}></img>
            </a></li>
        </ul>
      </div>
  )
}
