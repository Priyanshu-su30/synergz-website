import './footer.css';
import logo from '../img/synergz-logo.png'
import facebook from '../img/square-facebook-brands-solid.svg'
import linkedin from '../img/linkedin-brands-solid.svg'
import twitter from '../img/square-x-twitter-brands-solid.svg'
import youtube from '../img/square-youtube-brands-solid.svg'

function footer() {
    return(
        <>
            <footer>
            <div class="footer-line"></div>
            <div class="footer-wrapper">
                <section class="footer-top">
                    <div class="footer-headline">
                        <h2>Subscribe to our newsletter</h2>
                        <p>
                            Stay up to date with our news and articles
                        </p>
                    </div>
                    <div class="footer-subscribe">
                        <input type="email" spellcheck="false" placeholder="Your Email"/>
                        <button>
                            Sign Up
                        </button>
                    </div>
                </section>
                <div class="footer-columns">
                    <section class="footer-logo">
                        <h2>
                            <img src={logo} />
                        </h2>
                    </section>
                    <section>
                        <h3>Product</h3>
                        <ul>
                            <li>
                                <a href="#" title="API">API</a>
                            </li>
                            <li>
                                <a href="#" title="Pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="#" title="Documentation">Documentation</a>
                            </li>
                            <li>
                                <a href="#" title="Release Notes">Release Notes</a>
                            </li>
                            <li>
                                <a href="#" title="Status">Status</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Resources</h3>
                        <ul>
                            <li>
                                <a href="#" title="Support">Support</a>
                            </li>
                            <li>
                                <a href="#" title="Sitemap">Sitemap</a>
                            </li>
                            <li>
                                <a href="#" title="Newsletter">Newsletter</a>
                            </li>
                            <li>
                                <a href="#" title="Help Centre">Help Centre</a>
                            </li>
                            <li>
                                <a href="#" title="Investor">Investor</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <a href="#" title="About Us">About Us</a>
                            </li>
                            <li>
                                <a href="#" title="Blog">Blog</a>
                            </li>
                            <li>
                                <a href="#" title="Careers">Careers</a>
                            </li>
                            <li>
                                <a href="#" title="Press">Press</a>
                            </li>
                            <li>
                                <a href="#" title="Contact">Contact</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <a href="#" title="Terms and services">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Privacy Policy">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Cookies">
                                    Cookies
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Licenses">
                                    Licenses
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Cookies">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Contact</h3>
                        <ul>
                            <li>
                                <a href="#" title="Terms and services">
                                    +91 00000 00000
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Privacy Policy">
                                    synergz@gmail.com
                                </a>
                            </li>                            
                        </ul>
                    </section>
                </div>
                <div class="footer-bottom">
                    <div class='social-links'>
                        <ul>
                            <li>
                                <a href="#" title="Linkedin">
                                    <img src={linkedin} alt='Linkedin'/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Twitter">
                                    <img src={twitter} alt='Twitter'/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="facebook">
                                    <img src={facebook} alt='facebook'/>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="youtube">
                                    <img src={youtube} alt='youtube'/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <small>© Synergz Ltd. <span id="year"></span>, All rights reserved</small>
                </div>
            </div>
        </footer>
        </>
    )
}

export default footer;