import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [qoute, setQoute] = useState("");
  const [background, setBackground] = useState("blue");
  const colors = ["grey", "pink", "lightblue", "red", "coral", "lightgreen"];

  const changeBackground = () => {

    document.querySelector(".myApp").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    // const col = Math.floor(Math.random() * 999 % 6);
    // console.log(col);

    // setTimeout(() => {
    //   setBackground(colors[col]);
    // }, 300);
  }

  // btnClass = "btn "+ background;

  const func = () => {
    getQoute();
    changeBackground();

  }
  const getQoute = () => {
    fetch("https://api.quotable.io/random").then((response) => {
      return response.json()
    }).then((data) => setQoute(data));
  }

  useEffect(() => getQoute(), []);

  return (
    <div className="myApp">
      <div className='App'>
        <div className="card text-center mb-3">
          <div className="card-body">
            <div className="row" style={{ width: "90%" }} ><p class="card-text">{qoute.content}</p></div>
            <cite>- {qoute.author}</cite>
          </div>
          <div><button type="button" onClick={() => { func() }} className={`btn ` + background} >Change Qoute</button></div>

        </div>
      </div>
    </div>
  );
}

export default App;
