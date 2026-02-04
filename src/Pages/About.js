import React from "react";
import Header from "../Components/Header";
const resumeUrl = `${process.env.PUBLIC_URL}/MariamRakkaResume.pdf`;
const formEndpoint =
    process.env.REACT_APP_CONTACT_FORM_ENDPOINT ||
    "https://formspree.io/f/mojlggqz";
const recaptchaSiteKey =
    process.env.REACT_APP_RECAPTCHA_SITE_KEY ||
    "6LfmsGAsAAAAAEqPCVV62ex0IQ_4JD26w4DQOOTp";
const recaptchaOnload = "recaptchaOnloadCallback";

const About = () => {
    const recaptchaRef = React.useRef(null);
    const recaptchaIdRef = React.useRef(null);

    React.useEffect(() => {
        const renderRecaptcha = () => {
            if (!recaptchaRef.current || !window.grecaptcha) {
                return;
            }
            recaptchaRef.current.innerHTML = "";
            recaptchaIdRef.current = window.grecaptcha.render(
                recaptchaRef.current,
                {
                    sitekey: recaptchaSiteKey,
                },
            );
        };

        window[recaptchaOnload] = renderRecaptcha;

        if (window.grecaptcha) {
            renderRecaptcha();
            return () => {
                recaptchaIdRef.current = null;
            };
        }

        const existingScript = document.getElementById("recaptcha-script");
        if (existingScript) {
            existingScript.addEventListener("load", renderRecaptcha);
            return () => {
                existingScript.removeEventListener("load", renderRecaptcha);
                recaptchaIdRef.current = null;
            };
        }

        const script = document.createElement("script");
        script.id = "recaptcha-script";
        script.src = `https://www.google.com/recaptcha/api.js?onload=${recaptchaOnload}&render=explicit`;
        script.async = true;
        script.defer = true;
        script.addEventListener("load", renderRecaptcha);
        document.body.appendChild(script);

        return () => {
            script.removeEventListener("load", renderRecaptcha);
            recaptchaIdRef.current = null;
        };
    }, []);

    return (
        <div className="container home-container contact-page">
            <Header />
            <div className="contact-wrapper">
                <h1>Contact Me</h1>
                <div className="contact-info card-section">
                    <div className="contact-card-item">
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
                        <div className="contact-divider" aria-hidden="true" />
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
                            <div
                                className="contact-honeypot"
                                aria-hidden="true"
                            >
                                <label htmlFor="contact-company">
                                    Company
                                </label>
                                <input
                                    id="contact-company"
                                    name="_gotcha"
                                    type="text"
                                    tabIndex="-1"
                                    autoComplete="off"
                                />
                            </div>
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
                                    minLength={2}
                                    maxLength={80}
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
                                    maxLength={120}
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
                                    minLength={3}
                                    maxLength={120}
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
                                    minLength={10}
                                    maxLength={2000}
                                    required
                                />
                            </div>
                            <div className="contact-recaptcha">
                                <div
                                    className="g-recaptcha"
                                    ref={recaptchaRef}
                                />
                            </div>
                            <button type="submit" className="contact-submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
