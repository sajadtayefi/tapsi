import React from "react";

function Button({span,icon,classSpn,classbtn}) {
    return (
        <button className={classbtn}>
        <span className={classSpn}>{span}</span>
        {icon}
      </button>
      );    
}

export default Button;