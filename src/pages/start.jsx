import Button from "../components/button/button"

import "../styles/App.css"
import "./start.css"

const StartPage = () => {
    return(
        <div className="GeneralContainer">
            <div className="StartContentContainer">
                <p className="WebsitePurposeText">Esse jogo foi feito com o objetivo de criar um jogo que se parecesse mais um livro em que você imagina tudo do que algo visual, possibilitando que você crie seu mundo na propria mente, no entanto, caso você prefira é possivel escolher uma imagem de personagem que você deseja do site ou do seu próprio disposistivo</p>
                <Button name="Start"/>
            </div>
        </div>
    )
}

export default StartPage