import React from 'react';

function SuccessLogin({currentuser}){
    
    return (<div>
      <div className="loginsucces">
        Login successfull: Welcome {currentuser.name}!
      </div>
    </div>)
  }
export default SuccessLogin;