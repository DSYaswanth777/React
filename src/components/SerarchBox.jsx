import React, { useEffect, useRef } from "react";

function SerarchBox() {
  const inputRef = useRef(null);

  function hnadleFocus() {
    inputRef.current.focus();
  }

useEffect( () =>{
    hnadleFocus()
},[]


 )

  return (
    <>


    <div className="container">

      <input type="text" placeholder="Search box" ref={inputRef} className="form-control"/>
      <button className="btn btn-primary"> Focus Input</button>
    </div>
    </>
  );
}

export default SerarchBox;
