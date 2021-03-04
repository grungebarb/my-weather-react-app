
import WeatherApp from "./WeatherApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <WeatherApp />
          <small>
            <a
              href="https://github.com/grungebarb/grungebarb-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by GrungeBarb (Bárbara Llansó Di Renzo)
          </small>
        </div>
      </div>
    </div>
  );
}
