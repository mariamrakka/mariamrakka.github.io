import React from "react";
import Header from "../Components/Header";
import Photo from "../Images/Profile Pic.JPG";

const Home = () => {
    return (
        <div className="container home-container">
            <Header />
            <div className="d-flex flex-wrap justify-content-center align-items-center mx-auto text-center mb-5">
                <img
                    src={Photo}
                    alt="Mariam Rakka"
                    className="profile-image img-fluid"
                />
            </div>
            <section className="home-focus">
                <div className="focus-visual" aria-hidden="true">
                    <svg
                        className="focus-line"
                        viewBox="0 0 600 120"
                        role="img"
                        aria-label=""
                    >
                        <path d="M20 80 L120 80 L160 40 L230 40 L270 90 L340 90 L380 55 L450 55 L500 85 L580 85" />
                        <circle cx="120" cy="80" r="6" />
                        <circle cx="160" cy="40" r="6" />
                        <circle cx="270" cy="90" r="6" />
                        <circle cx="380" cy="55" r="6" />
                        <circle cx="500" cy="85" r="6" />
                    </svg>
                </div>
                <h2 className="focus-title">Focus Areas</h2>
                <div className="focus-grid">
                    <div className="focus-card">
                        <svg
                            className="focus-icon"
                            viewBox="0 0 64 64"
                            role="img"
                            aria-hidden="true"
                        >
                            <rect x="8" y="14" width="48" height="36" rx="6" />
                            <path d="M18 30h28M18 38h18" />
                            <circle cx="46" cy="38" r="4" />
                        </svg>
                        <div className="focus-card-title">Systems for ML</div>
                    </div>
                    <div className="focus-card">
                        <svg
                            className="focus-icon"
                            viewBox="0 0 64 64"
                            role="img"
                            aria-hidden="true"
                        >
                            <rect x="10" y="10" width="44" height="44" rx="8" />
                            <rect x="20" y="20" width="24" height="24" rx="4" />
                            <path d="M10 24H4M10 40H4M60 24H54M60 40H54M24 10V4M40 10V4M24 60V54M40 60V54" />
                        </svg>
                        <div className="focus-card-title">
                            In-Memory Computing
                        </div>
                    </div>
                    <div className="focus-card">
                        <svg
                            className="focus-icon"
                            viewBox="0 0 64 64"
                            role="img"
                            aria-hidden="true"
                        >
                            <path d="M12 20h20v24H12zM32 26h20v18H32z" />
                            <path d="M32 32h8M24 32h8M24 38h16" />
                            <circle cx="16" cy="16" r="4" />
                            <circle cx="48" cy="16" r="4" />
                        </svg>
                        <div className="focus-card-title">HW/SW Co-design</div>
                    </div>
                </div>
            </section>
            <div className="d-flex flex-wrap mx-auto bio-section text-center">
                <h2 className="justify-content-center align-items-center mx-auto">
                    Bio
                </h2>
                <p>
                    I am a computer architecture researcher focused on systems
                    for machine learning and in-memory computing. I earned my
                    PhD in Electrical and Computer Engineering from the
                    University of California, Irvine in June 2025, and my MS in
                    the same field in 2022. My dissertation, "In-Memory
                    Computing to Accelerate Machine Learning," and my master's
                    thesis on resistive CAMs for decision trees reflect my
                    focus on ML acceleration.
                </p>
                <p>
                    I currently work at Arm in Austin, TX as a Graduate
                    Research Engineer, where I model multi-chiplet
                    heterogeneous systems in gem5, execute workload-driven
                    performance calibration studies, and perform kernel-level
                    analysis in C/C++/Python. I build automated pipelines for
                    reproducible experiments and share findings with
                    architecture and research teams to inform design
                    decisions.
                </p>
                <p>
                    Across three prior Arm internships, I characterized machine
                    learning and data analytics workloads, identified
                    microarchitectural bottlenecks, and co-designed a
                    SIMD-capable accelerator concept, contributing to two
                    patent filings. My publications span TPAMI, JETC, TETC, and
                    DATE.
                </p>
                <p>
                    I enjoy cross-disciplinary collaboration and mentorship,
                    and I am motivated by research that advances efficient
                    compute for real-world ML systems.
                </p>
                <p>Fun fact: I have a special affinity for transistors.</p>
            </div>
            <div className="row">
                <div className="col-12 bio-section text-center">
                    <h2>Research Interests</h2>
                    <p className="text-center">
                        Systems for ML, In-memory computing, Architecture for
                        ML workloads, Software/Hardware co-design
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
