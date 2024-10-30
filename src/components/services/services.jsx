import './services.css'

function services(){
    return (
        <>
            <div class="container">
                <h1>Services</h1>
                <div class="card-container">
                    <div class="card-wrapper">
                    <div class="card light">
                        <div class="text-overlay">
                        <h2>Project Development</h2>
                        <div class="price">$79 <small>/ year</small></div>
                        <div class="details-text">
                            <span>1 contributor</span>
                            <span>Up to 10 projects</span>
                            <span>24/7 support</span>
                        </div>
                        </div>
                        <div class="purchase-button-container">
                        <h2 class="back-h2">Individual</h2>
                        <i class="fa-solid fa-person"></i>
                        <div class="purchase-button light">View More</div>
                        </div>
                    </div>
                    </div>
                    <div class="card-wrapper">
                    <div class="card dark">
                        <div class="text-overlay">
                        <h2>Consulting</h2>
                        <div class="price">$129</div>
                        <div class="details-text">
                            <span>10 contributors</span>
                            <span>Up to 50 projects</span>
                            <span>24/7 support</span>
                        </div>
                        </div>
                        <div class="purchase-button-container">
                        <h2 class="back-h2">Team</h2>
                        <i class="fa-solid fa-people-group"></i>
                        <div class="purchase-button dark">Purchase</div>
                        </div>
                    </div>
                    </div>
                    <div class="card-wrapper">
                    <div class="card light">
                        <div class="text-overlay">
                        <h2>Organization</h2>
                        <div class="price">$199</div>
                        <div class="details-text">
                            <span>100 contributors</span>
                            <span>Up to 200 projects</span>
                            <span>24/7 support</span>
                            <span>Access to Beta features</span>
                        </div>
                        </div>
                        <div class="purchase-button-container">
                        <h2 class="back-h2">Organization</h2>
                        <i class="fa-solid fa-building"></i>
                        <div class="purchase-button light">Purchase</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default services;