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
              <a href='/aboutUs'>About Us</a>
              <a href="/aboutUs">Our Work</a>
              <a href="/aboutUs">Services</a>
              <a href="/aboutUs">Careers</a>
              <a href="/aboutUs">Contact Us</a>
    
              </div>
          </div>                    
        </div>
        </div>
      );
}

export default navbar;