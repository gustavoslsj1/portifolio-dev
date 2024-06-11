import Navbar from "./Navbar";
import styles from '../styles/container.module.css'
export default function Maincontainer({children}){
    return(
        <div className={styles.container} >
            <Navbar/>
            {children}
        </div>
    )
}