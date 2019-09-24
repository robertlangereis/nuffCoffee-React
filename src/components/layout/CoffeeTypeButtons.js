import React from 'react';


function CoffeeTypeButtons({coffeetypes}){
    return (<div>
      <div className="coffeemenu">
   {coffeetypes && coffeetypes.slice(0,6).map(coffee => <button key={coffee.id} className="coffee__btn">{coffee.coffeeName}</button>)}
      </div>
    </div>)
  }
export default CoffeeTypeButtons;