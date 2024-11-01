import './body.css';

function Body() {
    return ( 
        <div className='main'>
            <div className='maintext'>
                <p>
                    We're a team of innovators, connectors, and problem-solvers, dedicated to building groundbreaking startups and delivering customized solutions for our clients.
                </p>
            </div>
            <div className='subtext'>
                <p>
                    We're passionate about fostering innovation, connecting talent, and providing tailored solutions that drive business growth and societal impact.
                </p>
            </div>
            <div className='btn'>
                <a href="#work">
                    <button className='button'>
                        View Our Work
                        <div className="hoverEffect"><div></div></div>
                    </button>
                </a>
                <a href="#join">
                    <button className='button'>
                        Join Us
                        <div className="hoverEffect"><div></div></div>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Body;
