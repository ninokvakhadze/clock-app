import "./App.css";
import refresh from "./assets/desktop/icon-refresh.svg";
import sun from "./assets/desktop/icon-sun.svg";
import moon from "./assets/desktop/icon-moon.svg";
import arrowDown from "./assets/desktop/Group 3.svg";
import arrowUp from "./assets/desktop/icon-arrow-up.svg";
import { useState, useEffect } from "react";

function getWeekNumber(date: Date): number {
  const onejan = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(
    ((date.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
  );
}

function App() {
  const [information, setInformation] = useState(false);
  const [time, setTime] = useState(new Date());
  const [morningOrNight, setMorningOrNight] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const currentHour = time.getHours();
    if (currentHour >= 6 && currentHour < 18) {
      setMorningOrNight(true);
      document.body.className = "";
    } else {
      setMorningOrNight(false);
      document.body.style.backgroundColor = "night";
    }

    return () => clearInterval(interval);
  }, [time]);

  const getTimeZoneParts = () => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [area, location] = timeZone.split("/");
    return { area, location };
  };

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}`;

  const getCurrentWeek = (): number => {
    return getWeekNumber(time);
  };

  const buttonClick = () => {
    if (information) {
      setInformation(false);
    } else {
      setInformation(true);
    }
  };
  const getCurrentDayOfYear = (): number => {
    const startOfYear = new Date(time.getFullYear(), 0, 1);
    const diff =
      (time.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000);
    return Math.floor(diff) + 1;
  };

  const getCurrentDayOfWeek = (): number => {
    return time.getDay();
  };

  return (
    <div className="App">
      <div className="top-part">
        <div
          className="head"
          style={information ? { display: "none" } : { display: "" }}
        >
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
        <div
          className="time-button"
          style={information ? { marginTop: "0px" } : { marginTop: "" }}
        >
          <div className="time-div">
            <div className="morning-evening">
              <img src={morningOrNight ? sun : moon} alt="sun" />
              <p className="greeting">
                {morningOrNight ? "GOOD MORNING" : "GOOD EVENING"}
                <span>, IT’S CURRENTLY</span>
              </p>
            </div>
            <div className="clock-div">
              <h1>{timeString}</h1>
              <p className="BST">BST</p>
            </div>
            <p className="place">
              in {getTimeZoneParts().area}, {getTimeZoneParts().location}
            </p>
          </div>
          <button onClick={buttonClick}>
            <p className="button-text">MORE</p>
            <img
              src={information ? arrowDown : arrowUp}
              alt="arrowDown"
              className="arrow"
            />
          </button>
        </div>
      </div>
      <div
        style={information ? { display: "" } : { display: "none" }}
        className={
          morningOrNight ? "information-div" : "information-div night2"
        }
      >
        <div className="information-top">
          <div className="information">
            <p className={morningOrNight ? "name" : "name night-text"}>
              CURRENT TIMEZONE
            </p>
            <p className={ morningOrNight?"data": "data night-text"}>
              {getTimeZoneParts().area}/{getTimeZoneParts().location}
            </p>
          </div>
          <div className="information">
            <p className={morningOrNight ? "name" : "name night-text"}>
              Day of the year
            </p>
            <p className={ morningOrNight?"data": "data night-text"}>{getCurrentDayOfYear()}</p>
          </div>
        </div>
        <hr />
        <div className="information-top">
          <div className="information">
            <p className={morningOrNight ? "name" : "name night-text"}>
              Day of the week
            </p>
            <p className={ morningOrNight?"data": "data night-text"}>{getCurrentDayOfWeek()}</p>
          </div>
          <div className="information">
            <p className={morningOrNight ? "name" : "name night-text"}>
              Week number
            </p>
            <p className={ morningOrNight?"data": "data night-text"}>{getCurrentWeek()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
