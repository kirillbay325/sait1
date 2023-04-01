import React from "react";
import { useState } from 'react';




function Card(props) {

    const [on, setOn] = useState(false);
    const [off, setOff] = useState(true);
    const [onn, setOnn] = useState(false);
    const [of, setOf] = useState(true);
    const [cart, SetCart] = useState();
    const [addToCart, setAddToCart ] = useState(false)

    function clickAdd(newProd){
        console.log(props)
        setAddToCart(!addToCart)
        props.addProdToCart(newProd)
        console.log(props.name)
    }
   


    return <div className="card" >

      

        <img src={props.img} className="kartinka_card"></img>
        <p className="TextCard">Фулл сет на <span style={{
            color: "black",
            fontWeight: "bold",
        }}>{props.name}</span>
        </p>
        <div>
            <span className="TextCard">Цена: <br /><span className="TextCard" style={{
                color: "black",
                fontWeight: "bold",
            }}>{props.cost}</span>
            </span>
            {/* <button  onClick={() => clickAddButton({}) } style={{
                width: "40px",
                height: "40px",
                display: "inline-block",
                marginLeft: "30%",
                borderRadius: "10px",
                backgroundColor: "white"
            }}>
            </button> */}
<div className='buttonAddToCart'><img src={addToCart ? './img/addtocartlightgreen.png' : './img/addtocartwhite.png'} onClick={() =>  clickAdd({id: props.id, name: props.name, cost: props.cost, img: props.img})}></img></div>
            <button style={{
                                    width: "40px",
                                    height: "40px",
                                    display: "inline-block",
                                    marginLeft: "3%",
                                    borderRadius: "100px",
                                    backgroundColor: "white"
                                }}  onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}</button>
                                 
        </div>
    </div>
}

export default Card