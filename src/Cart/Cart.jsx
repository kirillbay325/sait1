import "./Cart.css"
import { useState } from 'react';

function Cart(props) {

  
  // const [openCart, setOpenCart] = useState(true)
  const [count, setCount] = useState(12000);
  let newCount = []
  function update(){
    newCount = [...document.querySelectorAll('.number')].map(a => a.innerText);
    newCount = newCount.map(count => {return count.split("").join("")})
    newCount = newCount.map(count => {return parseFloat(count)})
    newCount = newCount.reduse((partialSum, a) => partialSum + a, 0)
    newCount = newCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"")+"рублей";
    setCount(newCount)
  }
  
  const [oform, setOform] = useState(false);

  // const items = props.cart.map((item) => {q
  //   return <div className="card">

  //   <div className='intovar'>
  //     <div className='imgtovar' style={{backgroundImage: item.image}}>
  //     </div>

  //     <div className='txttovar'>{item.name} <br></br><br></br>

  //       <div>{item.chena}</div>

  //       </div>
  //     </div>
  //   </div>
  // })

  function increment() {
    setCount(count + 12000);
  }
  function decrement() {
    setCount(count - 12000);
  }

  let styleOverflow = {}
  let styleSideBlock = {}

  if (props.openCart == true) {
    styleOverflow = { width: '100%' };
    styleSideBlock = { width: '385px' };
  }
  else {
    styleOverflow = { width: '0' };
    styleSideBlock = { width: '0' };
  }

  let content = oform ? <div><h1>Корзина</h1>
    <img src="./img/Group91(1).svg" className="Close" onClick={() => props.openCart(false)}></img>
    <div className="poloska"></div>

    <div className="TovarOformlenDiv" >
      <img className="TovarOformlen" src="./img/image12.svg" alt="" />
      <a href="#"  onClick={() => setOform(false)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        назад
      </a>
      <p><b>Заказ оформлен!</b></p>
      <p style={{
        color: "grey",
        textAlign: "center",
      }}>Ваш заказ скоро будет передан вам на аккаунт steam</p>
    </div>

  </div> : <div><h1>Корзина</h1>
    <img src="./img/Group91(1).svg" className="Close" onClick={() => props.onCloseCart(true)}></img>
    <div className="poloska"></div>

            {/* Товар */}
            
    <div className="MainProduct">
      <img src="https://sun9-40.userapi.com/impg/mnXvG8pVxR1lbpKlVjS64Xpc4rO1zdPYVZAqCA/ElGMYLxuFKU.jpg?size=539x604&quality=95&sign=4e9f892ed15e6e84a302e474f92547ea&c_uniq_tag=y95uQ53QNPy8Olxq91vdPum-ySG8nfe08txqTIAJcXQ&type=album" className="kartinka_card_basket"></img>
      <p className="TextProduct">Фулл сет на “DROW RANGER”<br/>12.000 p.</p>
      
      <img src="./img/Group110.svg" className="Plus" onClick={increment}></img>
      <img src="./img/Group91(1).svg" className="Close"></img>
      <img src="./img/Group111.svg" className="Minus" onClick={decrement}></img>
      <input type={"text"} value={count} className="Number" style={
        {
          width: "15%",
          left: "72%",
        }
      }></input>
    </div>
    {/* :
    <>
    
    {items}
    </> */}
    
    
    

    <p onClick={() => update()}  style={{
      bottom: "10%",
      right: "42%",
      position: "absolute",
    }}>Итого: {count}</p>

    <a  href="#" onClick={() => setOform(true)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Купить
    </a></div>

  return (
    <>
      <div className="OverFlow" style={styleOverflow} onClick={() => props.onCloseCart(true)}></div>
      <div className="SideBlock" style={styleSideBlock}>

        {content}


      </div>
    </>
  )
}

export default Cart;