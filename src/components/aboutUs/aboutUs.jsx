import './aboutUs.css';

function AboutUs() {
    return (
        <div className="about-container">
            <h1>About Synergz</h1>
            <div className="about-section">
                <p className="about-description">
                    Synergz is a passionate team of innovators and experts committed to building impactful startups, hiring exceptional talent, and delivering tailored solutions to meet our clients' diverse needs.
                    Our collaborative approach ensures that we offer top-tier services across various domains, ranging from technology development to strategic business consulting.
                </p>
            </div>

            <div className="values-goals">
                <div className="values">
                    <h2>Our Core Values</h2>
                    <ul>
                        <li>Integrity - We value honesty and transparency in all our interactions.</li>
                        <li>Innovation - We are constantly seeking new ways to solve complex challenges.</li>
                        <li>Client-Centricity - Our clients' needs drive every project we undertake.</li>
                        <li>Collaboration - We believe in the power of teamwork and mutual respect.</li>
                    </ul>
                </div>

                <div className="goals">
                    <h2>Our Goals</h2>
                    <ul>
                        <li>Empower startups by offering guidance, resources, and technology solutions.</li>
                        <li>Attract and retain top talent to fuel our clients' growth and innovation.</li>
                        <li>Expand our network to create meaningful connections across industries.</li>
                    </ul>
                </div>
            </div>

            <div className="expertise">
                <h2>Our Expertise</h2>
                <p>
                    With a skilled team of developers, designers, strategists, and project managers, Synergz excels in providing end-to-end solutions. From web and mobile application development to digital marketing and business consulting, our expertise empowers clients to turn their visions into reality.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
