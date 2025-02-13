import React, { useState, useEffect } from 'react';
import './App.css';
import clockImage from './clock.png'; // Add a clock image in the src folder
import studyImage from './study.png'; // Add a study image in the src folder

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [quote, setQuote] = useState("Stay focused, you're doing great!");

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      alert("Time's up! Take a 5-minute break.");
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  // Fetch a random motivational quote
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };

  // Format time (MM:SS)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="App">
      <h1>Student Study Helper</h1>

      {/* Timer Section with Clock Image */}
      <div className="section timer-section">
        <img src={clockImage} alt="Clock" className="clock-image" />
        <h2>Study Timer</h2>
        <p className="time-display">{formatTime(time)}</p>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={() => setTime(25 * 60)}>Reset Timer</button>
      </div>

      {/* Task Counter Section */}
      <div className="section">
        <h2>Task Counter</h2>
        <p>Completed Tasks: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add Task</button>
        <button onClick={() => setCount(0)}>Reset Tasks</button>
      </div>

      {/* Motivational Quote Section with Study Image */}
      <div className="section quote-section">
        <img src={studyImage} alt="Study" className="study-image" />
        <h2>Motivational Quote</h2>
        <p>"{quote}"</p>
        <button onClick={fetchQuote}>Get New Quote</button>
      </div>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
//   const [isActive, setIsActive] = useState(false);
//   const [quote, setQuote] = useState("Stay focused Kalyan, you can do it whatever you want!");

//   // Timer logic
//   useEffect(() => {
//     let interval = null;
//     if (isActive && time > 0) {
//       interval = setInterval(() => {
//         setTime((time) => time - 1);
//       }, 1000);
//     } else if (time === 0) {
//       setIsActive(false);
//       alert("Time's up! Take a 5-minute break.");
//     }
//     return () => clearInterval(interval);
//   }, [isActive, time]);

//   // Fetch a random motivational quote
//   const fetchQuote = async () => {
//     try {
//       const response = await fetch('https://api.quotable.io/random');
//       const data = await response.json();
//       setQuote(data.content);
//     } catch (error) {
//       console.log("Error fetching quote:", error);
//     }
//   };

//   // Format time (MM:SS)
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div className="App">
//       <h1>Student Study Helper</h1>

//       {/* Counter Section */}
//       <div className="section">
//         <h2>Task Counter</h2>
//         <p>Completed Tasks: {count}</p>
//         <button onClick={() => setCount(count + 1)}>Add Task</button>
//         <button onClick={() => setCount(0)}>Reset Tasks</button>
//       </div>

//       {/* Timer Section */}
//       <div className="section">
//         <h2>Study Timer</h2>
//         <p>Time Remaining: {formatTime(time)}</p>
//         <button onClick={() => setIsActive(!isActive)}>
//           {isActive ? "Pause" : "Start"}
//         </button>
//         <button onClick={() => setTime(25 * 60)}>Reset Timer</button>
//       </div>

//       {/* Motivational Quote Section */}
//       <div className="section">
//         <h2>Motivational Quote</h2>
//         <p>"{quote}"</p>
//         <button onClick={fetchQuote}>Get New Quote</button>
//       </div>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//second code:
// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

// export default App;
