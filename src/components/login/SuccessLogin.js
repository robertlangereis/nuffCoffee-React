import React from 'react';

function SuccessLogin(props){
    const currentuser = props.currentuser
    // props && console.log('coffeetypes', coffeetypes);
    // console.log(currentuser)
    // console.log(coffeetypes.filter(coffee => console.log(coffee.coffeeName)))

    return (<div>
      <div className="loginsucces">
        Login successfull: Welcome {currentuser.name}!
   {/* {coffeetypes.map(coffee => <button className="menu__btn">{coffee.coffeeName}</button>)} */}
        
        {/* <button className="menu__btn">About</button> */}
        {/* <button className="menu__btn">Count</button> */}
      </div>
    </div>)
  }
export default SuccessLogin;