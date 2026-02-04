import React from "react";
import Header from "../Components/Header";
const resumeUrl = `${process.env.PUBLIC_URL}/MariamRakkaResume.pdf`;
const formEndpoint = process.env.REACT_APP_CONTACT_FORM_ENDPOINT;

const About = () => {
    return (
        <div className="container home-container contact-page">
            <Header />
            <div className="contact-wrapper">
                <h1>Contact Me</h1>
                <p className="intro-text">
                    Use the form below to send me a message without exposing my
                    email address.
                </p>
                <div className="contact-info card-section">
                    <div className="contact-card-item">
                        <form
                            className="contact-form"
                            action={formEndpoint}
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="_subject"
                                value="New message from mariamrakka.github.io"
                            />
                            <div className="contact-field">
                                <label
                                    className="contact-label"
                                    htmlFor="contact-name"
                                >
                                    Name
                                </label>
                                <input
                                    className="contact-input"
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                />
                            </div>
                            <div className="contact-field">
                                <label
                                    className="contact-label"
                                    htmlFor="contact-email"
                                >
                                    Email
                                </label>
                                <input
                                    className="contact-input"
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                            <div className="contact-field">
                                <label
                                    className="contact-label"
                                    htmlFor="contact-subject"
                                >
                                    Subject
                                </label>
                                <input
                                    className="contact-input"
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="contact-field">
                                <label
                                    className="contact-label"
                                    htmlFor="contact-message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="contact-textarea"
                                    id="contact-message"
                                    name="message"
                                    rows="6"
                                    required
                                />
                            </div>
                            <button type="submit" className="contact-submit">
                                Send Message
                            </button>
                        </form>
                        <div className="contact-divider" aria-hidden="true" />
                        <div className="contact-details">
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
        </div>
    );
};

export default About;
