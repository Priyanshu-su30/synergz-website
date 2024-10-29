import './navbar.css';
import logo from '../../img/synergz-logo.png';
import aboutUs from '../aboutUs/aboutUs';

function navbar() {
    return (
        <div>
          <div className='body'>
          <div id="header">
            <div className="logo">
              <a href="/aboutUs"><img src={logo} alt='logo'></img></a>
            </div > 
              <div className='links'>
              <button className='nav-btn bttn'>About Us</button>
              <button className='nav-btn'>About Us</button>
              <button className='nav-btn'>About Us</button>
              <button className='nav-btn'>About Us</button>
              
    
              </div>
          </div>                    
        </div>
        </div>
      );
}

export default navbar;