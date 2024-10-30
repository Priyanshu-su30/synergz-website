import './navbar.css';
import logo from '../img/synergz-logo.png';


function navbar() {
    return (
        <div>
          <div className='body'>
          <div id="header">
            <div className="logo">
              <a href="/aboutUs"><img src={logo} alt='logo'></img></a>
            </div > 
                <div className='links'>
                  <a href='/s'><button className='nav-btn bttn'>About Us</button></a>
                  <a href='/'><button className='nav-btn bttn'>Our Work</button></a>
                  <a href='/'><button className='nav-btn bttn'>Services</button></a>
                  <a href='/'><button className='nav-btn bttn'>Careers</button></a>
                  <a href='/'><button className='nav-btn bttn'>Contact Us</button></a>
                </div>
            </div>                    
          </div>
        </div>
      );
}

export default navbar;