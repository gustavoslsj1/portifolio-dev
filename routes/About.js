import React from "react";
import "../styles/about.css"
function About() {
    return (
        <div className="About">
            <div className="bloco2">
                <div className="web">
                    <img src="https://cdn-icons-png.freepik.com/256/3914/3914588.png?semt=ais_hybrid" className="img-web"></img>
                    <h3>web developer</h3>
                    <p className="paragrafo">front e backand developer com  mais de 3 projetos pessoais. 1 ano e meio de experiência na area </p>
                </div>
                <div className="mobile">
                    <img src="https://cdn-icons-png.freepik.com/256/3841/3841536.png?semt=ais_hybrid"></img>
                    <h3>mobile developer</h3>
                    <p className="paragrafo" >front developer com 1 projeto feito em react native. menos de 1 ano de experiência  </p>
                </div>
                <div className="gamer" >
                    <img src="https://cdn-icons-png.freepik.com/256/15399/15399467.png?semt=ais_hybrid" alt="as"></img>
                    <h3>gamer developer</h3>
                    <p className="paragrafo"> area de hobbie com 1 jogo simples feito na unreal engine motor de desenvolvimento de jogos,
                     com 1 curso feito na udemy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;