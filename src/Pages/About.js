import React from "react";
import Header from "../Components/Header";
import Resume from "../Files/MariamRakkaResume.pdf";

const About = () => {
    return (
        <div className="container home-container">
            <Header />
            <div className="contact-wrapper">
                <h1>Contact Me</h1>
                <div className="contact-info card-section">
                    <div className="contact-card-item">
                        <div className="contact-row">
                            <strong>Email:</strong>
                            <br />
                            <a href="mailto:rakka.mariam@icloud.com">
                                rakka.mariam@icloud.com
                            </a>
                        </div>
                        <div className="contact-row">
                            <strong>Phone:</strong>
                            <br />
                            <a href="tel:+19498441214">+1-949-844-1214</a>
                        </div>
                        <div className="contact-row">
                            <strong>Location:</strong>
                            <br />
                            Austin, TX, USA
                        </div>
                        <div className="contact-row">
                            <strong>Resume (PDF):</strong>
                            <br />
                            <a
                                href={Resume}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download
                            </a>
                        </div>
                        <div className="contact-row">
                            <strong>LinkedIn:</strong>
                            <br />
                            <a
                                href="https://www.linkedin.com/in/mariam-rakka"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Link
                            </a>
                        </div>
                        <div className="contact-row">
                            <strong>Google Scholar:</strong>
                            <br />
                            <a
                                href="https://scholar.google.com/citations?user=Fb9_7EMAAAAJ&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Link
                            </a>
                        </div>
                        <div className="contact-row">
                            <strong>GitHub:</strong>
                            <br />
                            <a
                                href="https://github.com/mariamrakka"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
