import './services.css';

function Services() {
    return (
        <div className="container">
            <h1>Services</h1>
            <div className="card-container">
                <div className="card-wrapper">
                    <div className="card light">
                        <div className="text-overlay">
                            <h2>Project Development</h2>
                            <div className="price">$79 <small>/ year</small></div>
                            <div className="details-text">
                                <span>1 contributor</span>
                                <span>Up to 10 projects</span>
                                <span>24/7 support</span>
                            </div>
                        </div>
                        <div className="purchase-button-container">
                            <h2 className="back-h2">Individual</h2>
                            <i className="fa-solid fa-person"></i>
                            <div className="purchase-button light">View More</div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card dark">
                        <div className="text-overlay">
                            <h2>Consulting</h2>
                            <div className="price">$129</div>
                            <div className="details-text">
                                <span>10 contributors</span>
                                <span>Up to 50 projects</span>
                                <span>24/7 support</span>
                            </div>
                        </div>
                        <div className="purchase-button-container">
                            <h2 className="back-h2">Team</h2>
                            <i className="fa-solid fa-people-group"></i>
                            <div className="purchase-button dark">Purchase</div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card light">
                        <div className="text-overlay">
                            <h2>Organization</h2>
                            <div className="price">$199</div>
                            <div className="details-text">
                                <span>100 contributors</span>
                                <span>Up to 200 projects</span>
                                <span>24/7 support</span>
                                <span>Access to Beta features</span>
                            </div>
                        </div>
                        <div className="purchase-button-container">
                            <h2 className="back-h2">Organization</h2>
                            <i className="fa-solid fa-building"></i>
                            <div className="purchase-button light">Purchase</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
