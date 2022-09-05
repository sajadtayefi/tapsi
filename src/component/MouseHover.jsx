import { useState } from "react";

function MouseHover({span ,ptag,classN}) {
  const [hover, setHover] = useState(false);
  const hoverHandler = () => {
    setHover(true);
  };
  const hidehandler = () => {
    setHover(false);
  };
  return (
    <div
      onMouseOver={hoverHandler}
      onMouseOut={hidehandler}
      className={classN}
    >
      <span> {span}</span>
      {hover ? <p className=" font-normal mt-4 text-sm">{ptag}</p> : null}
    </div>
  );
}

export default MouseHover;
