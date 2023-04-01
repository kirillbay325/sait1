import "./Main.css"
import Card from "./Card/Card"
import { useState } from 'react';

function Main(props) {
    

    // const [onn, setOnn] = useState(false);
    // const [offf, setOfff] = useState(true);

    // const [onnn, setOnnn] = useState(false);
    // const [offff, setOffff] = useState(true);


    let skins = [
        { id: 1, name: "Фулл сет на “DROW RANGER”", cost: "12.000", img: "img/2a0d4fbc773bfeb0cc5d3c268e3a3e261.png"    },
        { id: 2, name: "Фулл сет на “WINDRANGER”" , cost: "5.000" , img: "img/2a0d4fbc773bfeb0cc5d3c268e3a3e261(1).png" },
        { id: 3, name: "Фулл сет на “SLARK ”"     , cost: "7.000" , img: "img/2a0d4fbc773bfeb0cc5d3c268e3a3e261(2).png" },

    ]



    return (


        <>
            <img src="https://overplus.gg/_nuxt/img/icons.faa97ba.webp" className="AllItems"></img>
            {/* // КАРТОЧКА // */}
            <div className="MainCards">
                {
                    skins.map(skin => {
                        return <Card name={skin.name} cost={skin.cost} img={skin.img} addProdToCart={(newProd) => props.addProdToCart(newProd)} />
                    })
                }
            </div>


        </>
    )
}
export default Main;












