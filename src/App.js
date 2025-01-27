import logo from './img/logo.svg';
import hero from './img/hero-desktop.jpg';
import heroMobile from './img/hero-mobile.jpg';
import { Input } from './components/input/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <>
        <div className='conteudo'>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="App-heroMobile">
            <img src={heroMobile} className="heroMobile" alt="Hero Mobile" />
          </div>
          <h1 className='centralizar'><span>We're</span> coming soon</h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and ourlaunch deals.
          </p>
          <div className='input'>
            <Input leftIcon={false} name="email" placeholder="Email Address"/>
          </div>
        </div>
        <div className='img'>
          <img src={hero} className="hero-desktop" alt="Hero Desktop" />
        </div>
        </>
      </div>
      
      
      <footer>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge"  target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
     
    </div>
  );
}

export default App;
