import React from "react";
import "../styles/Home.css"
function home() {
    return (
        <div className="Home">
            <p className="welcome">bem-vindo</p>
            <h2 className="texto">Oi, eu sou</h2>
            <h1 className="destacado"> Gustavo Lima</h1>
            <h2 className="texto"> e sou um web Developer.</h2>
            <h4>apresento-lhes meu portifolio feito em javascript no framework react.</h4>
            <h3 className="contato">Formas de contato:</h3>
            <ul className="ul">
                <li>
                    <a href='https://wa.me/qr/OQOIPGCJ5H5VJ1' >
                        <img src="https://img.icons8.com/?size=50&id=16733&format=png" alt="whatsap" className="icones"></img>
                    </a></li>
                <li >
                    <a href="https://github.com/gustavoslsj1" >
                        <img src="https://img.icons8.com/?size=50&id=12599&format=png" alt="github" className="icones"></img>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/gust_gusty_/">
                        <img src="https://img.icons8.com/?size=50&id=32309&format=png" alt="instagram" className="icones"></img>
                    </a></li>
                <li>
                    <a href='https://www.linkedin.com/in/gustavo-lima-544b17230/'>
                        <img src="https://img.icons8.com/?size=50&id=8808&format=png" alt="linkedin" className="icones"></img>
                    </a></li>
            </ul>
        </div>
    )
}

export default home;