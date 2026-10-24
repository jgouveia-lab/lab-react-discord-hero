import './App.css';
import logo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import background from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="Discord logo" className="logo" />
        <img src={menuIcon} alt="menu" className="menu-icon" />
      </nav>

      <div className="hero">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>

        <div className="buttons">
          <button className="btn-white">Download for Mac</button>
          <button className="btn-dark">Open Discord in your browser</button>
        </div>
      </div>

      <img src={background} alt="discord characters" className="background-img" />
    </div>
  );
}

export default App;
