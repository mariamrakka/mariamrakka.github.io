import React from "react";
import Header from "../Components/Header";
const resumeUrl = `${process.env.PUBLIC_URL}/MariamRakkaResume.pdf`;

const About = () => {
    return (
        <div className="container home-container contact-page">
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
                            <strong>Location:</strong>
                            <br />
                            Austin, TX, USA
                        </div>
                        <div className="contact-row">
                            <strong>Resume (PDF):</strong>
                            <br />
                            <a
                                href={resumeUrl}
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
