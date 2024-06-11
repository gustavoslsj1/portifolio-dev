import Link from 'next/link'
import styles from '../styles/navbar.module.css'
export default function Navbar() {
    return (
        <nav >
           <h3 className={styles.portifolio}>portifolio</h3>
            <Link href='/' className={styles.home} > home </Link>
            <Link href='/About' className={styles.about} > about </Link>
            <Link href='/Skills' className={styles.skills}> skills </Link>
        </nav>
    )
}
