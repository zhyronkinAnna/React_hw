import React, { useState, useRef } from 'react';

const Counter = () => {

   //let count = 0;
   let count = useRef(0);

   const increaseCount =  () => {
     count.current++;
     console.log(count.current);
     console.log(divElem);
   }

   const divElem = useRef(null);

   let [i, setI] = useState(0);

  
   const increment = () =>{
     setI(++i);
   }

   const decrement = () =>{
     setI(--i);
   }
    return (
        <div ref={divElem}>
          <button onClick={increaseCount}>increaseCount</button>

            <button onClick={decrement}>-</button>
            {i}
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;
