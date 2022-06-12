import {useEffect, useState} from "react"

function App() {
  const [angle, setAngle] = useState(100);

  useEffect(function() {
        //Read
         setAngle(localStorage.getItem('angle'))
      }, []);


  function onAngleChange({ target}) {
    setAngle(+target.value)
  }
  const styles = {
    width: "300px",
    height:"300px",
    backgroundColor:"red",
    transform: `skew(${angle}deg)`,
    transtion: `1s all ease-in`,
    borderRadius: "50%",
    

  }
  return (
    <div className="App">
       <div style={{marginBottom:"100px"}}>
         <input type="range" min="0" max="360" value={angle} onChange={onAngleChange}/>
       </div>
       <div style={styles}></div>
    </div>
  );
}
export default App








// import { useEffect, useState } from "react";

// function App() {
//   const [number, setNumber] = useState(0);

//   useEffect(function() {
//     //Read
//      setNumber(+localStorage.getItem('number'))
//   }, []);
  


//   function onIncrease() {
//     localStorage.setItem('number', number +1)
//     setNumber(number+1)
//   }

//   function onDecrease() {
//     localStorage.setItem('number', number -1)
//     setNumber(number-1)
//   }


//   return (
//     <div className="App">
//       <button onClick={onIncrease}>+</button>
//       {number ?? 0}
//       <button onClick={onDecrease}>-</button>
//     </div>
//     );
// }

// export default App;



























// import { useEffect, useState } from 'react';

// function App() {
// const [name, setName] = useState('');

// useEffect(function() {
//   //Read
//    setName(localStorage.getItem(name))
// }, []);

// function onNameChange({target}) {
//   //create/ Uptate
//   localStorage.setItem('name', target.value);
//   setName(target.value)

// }
// //delete
// function onNameClear() {
//   localStorage.setItem('name');
// setName('')
// }

//   return (
//     <div className="App">
//       <input type="text"
//       value={name}
//       placeholder="Your name"
//       onChange={onNameChange}/>
//       <span>Your name is {name}</span>
//       <button onClick={onNameClear}>Clear</button>
//     </div>
//   );
// }

// export default App;
