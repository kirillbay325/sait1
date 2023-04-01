import { Routes, Route } from 'react-router-dom';

function Favour() {

    return(
<>
<div style={{right: "29%", display: "inline-block", position: "absolute"}}>
    <img src="img/notfav.png" style={{margin: "0 auto", display: "block"}} />
    <p style={{fontSize: "32px", textAlign: "center"}}>Избранного нет :(</p>
    <p style={{color: "grey", fontSize: "24px", textAlign: "center"}}>Вы ничего не добавили в избранное</p>
</div>

   


</>
    )
}
export default Favour;