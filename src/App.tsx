import "./App.css";
import refresh from "./assets/desktop/icon-refresh.svg";
import sun from "./assets/desktop/icon-sun.svg";
import arrowDown from "./assets/desktop/icon-arrow-down.svg";
function App() {
  return (
    <div className="App">
      <div className="top-part">
        <div className="head">
          <div className="quote-div">
            <p className="quote">
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </p>
            <img src={refresh} className="refresh" alt="refresh" />
          </div>
          <h4>Ada Lovelace</h4>
        </div>
        <div className="time-button">
        <div className="time-div">
          <div className="morning-evening">
            <img src={sun} alt="sun" />
            <p className="greeting">GOOD MORNING</p>
          </div>
          <div className="clock-div">
            <h1>11:37</h1>
            <p className="BST">BST</p>
          </div>
          <p className="place">IN LONDON, UK</p>
        </div>
        <button>
          <p className="button-text">MORE</p>
          <div className="circle">
            <img src={arrowDown} alt="arrowDown" />
          </div>
        </button>
        </div>
      </div>
      <div className="information-div">
        <div className="information-top">
          <div className="information">
            <p className="name">CURRENT TIMEZONE</p>
            <p className="data">Europe/London</p>
          </div>
          <div className="information">
            <p className="name">Day of the year</p>
            <p className="data">295</p>
          </div>
        </div>
        <hr />
        <div className="information-top">
          <div className="information">
            <p className="name">Day of the week</p>
            <p className="data">5</p>
          </div>
          <div className="information">
            <p className="name">Week number</p>
            <p className="data">42</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
