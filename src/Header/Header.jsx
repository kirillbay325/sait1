import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


function Header(props) {


  return <div className='mainHeader'>

    <Stack direction="horizontal" gap={3}>
      <div className='leftHeader'>
        <img src="/img/logotip.png" width={175} height={140} />
        <div className='leftHeaderText'>
          <h1><Link style={{fontSize: "32px"}} to="/" className='link'>SCAMMERS</Link></h1>
          <p>BEST OF SKINCHANGER</p>
        </div>
      </div>
      
      <div className='rightHeader ms-auto'>
        <div className='peq'>
        <ul className="wrapper">
        <Link className='link' to="/profile">
<li className="icon facebook">
  
    <span className="tooltip">Профиль </span>
    <span><i className="fab fa-facebook-f"></i><img src="/img/profile.png" width={30} height={30} /></span>
  
</li>
      </Link>
<Link className='link' to="/favour">
<li className="icon twitter" >

<span className="tooltip">Избранное</span>
    <span><i className="fab fa-twitter"><img src="/img/heart.png" width={30} height={30}/></i></span>

</li>
</Link>
<li onClick={() => props.onOpenCart()}  className="icon instagram">
  <span className="tooltip">Корзина</span>
  <span ><i className="fab fa-instagram"><img src="/img/cart.png" width={30} height={30}/></i></span>
</li>

</ul>
        </div>
      </div>
    </Stack>
  </div>

}

export default Header;

// onClick={() => props.onOpenCart()}


