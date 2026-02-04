import React from "react";
import Header from "../Components/Header";
import Photo from "../Images/Profile Pic.JPG";

const Home = () => {
    const [flippedCards, setFlippedCards] = React.useState([
        false,
        false,
        false,
        false,
    ]);

    const toggleCard = (index) => {
        setFlippedCards((prev) =>
            prev.map((isFlipped, i) => (i === index ? !isFlipped : isFlipped)),
        );
    };

    const handleCardKeyDown = (event, index) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleCard(index);
        }
    };

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
                    <svg className="focus-line" viewBox="0 0 600 160">
                        <g
                            className="chip chip-left"
                            transform="translate(70 20)"
                        >
                            <rect
                                className="chip-body"
                                x="0"
                                y="0"
                                width="120"
                                height="120"
                                rx="12"
                            />
                            <rect
                                className="chip-core"
                                x="36"
                                y="36"
                                width="48"
                                height="48"
                                rx="6"
                            />
                            <text
                                className="chip-text"
                                x="60"
                                y="68"
                                textAnchor="middle"
                            >
                                AI
                            </text>
                            <line
                                className="chip-pin"
                                x1="20"
                                y1="-8"
                                x2="20"
                                y2="0"
                            />
                            <line
                                className="chip-pin"
                                x1="40"
                                y1="-8"
                                x2="40"
                                y2="0"
                            />
                            <line
                                className="chip-pin"
                                x1="60"
                                y1="-8"
                                x2="60"
                                y2="0"
                            />
                            <line
                                className="chip-pin"
                                x1="80"
                                y1="-8"
                                x2="80"
                                y2="0"
                            />
                            <line
                                className="chip-pin"
                                x1="100"
                                y1="-8"
                                x2="100"
                                y2="0"
                            />
                            <line
                                className="chip-pin"
                                x1="20"
                                y1="120"
                                x2="20"
                                y2="128"
                            />
                            <line
                                className="chip-pin"
                                x1="40"
                                y1="120"
                                x2="40"
                                y2="128"
                            />
                            <line
                                className="chip-pin"
                                x1="60"
                                y1="120"
                                x2="60"
                                y2="128"
                            />
                            <line
                                className="chip-pin"
                                x1="80"
                                y1="120"
                                x2="80"
                                y2="128"
                            />
                            <line
                                className="chip-pin"
                                x1="100"
                                y1="120"
                                x2="100"
                                y2="128"
                            />
                            <line
                                className="chip-pin"
                                x1="-8"
                                y1="20"
                                x2="0"
                                y2="20"
                            />
                            <line
                                className="chip-pin"
                                x1="-8"
                                y1="40"
                                x2="0"
                                y2="40"
                            />
                            <line
                                className="chip-pin"
                                x1="-8"
                                y1="60"
                                x2="0"
                                y2="60"
                            />
                            <line
                                className="chip-pin"
                                x1="-8"
                                y1="80"
                                x2="0"
                                y2="80"
                            />
                            <line
                                className="chip-pin"
                                x1="-8"
                                y1="100"
                                x2="0"
                                y2="100"
                            />
                            <line
                                className="chip-pin"
                                x1="120"
                                y1="20"
                                x2="128"
                                y2="20"
                            />
                            <line
                                className="chip-pin"
                                x1="120"
                                y1="40"
                                x2="128"
                                y2="40"
                            />
                            <line
                                className="chip-pin"
                                x1="120"
                                y1="60"
                                x2="128"
                                y2="60"
                            />
                            <line
                                className="chip-pin"
                                x1="120"
                                y1="80"
                                x2="128"
                                y2="80"
                            />
                            <line
                                className="chip-pin"
                                x1="120"
                                y1="100"
                                x2="128"
                                y2="100"
                            />
                        </g>
                        <g
                            className="chip chip-right"
                            transform="translate(410 20)"
                        >
                            <rect
                                className="chip-body"
                                x="0"
                                y="0"
                                width="120"
                                height="120"
                                rx="12"
                            />
                            <rect
                                className="chip-core"
                                x="36"
                                y="36"
                                width="48"
                                height="48"
                                rx="6"
                            />
                            <text
                                className="chip-text"
                                x="60"
                                y="68"
                                textAnchor="middle"
                            >
                                AI
                            </text>
                            <line
                                className="chip-pin"
                                x1="20"
                                y1="-8"
                                x2="20"
                                y2="0"
                            />
                            <line
                                className="chip-pin"
                                x1="40"
                                y1="-8"
                                x2="40"
                                y2="0"
                            />
                            <line
                                className="chip-pin"
                                x1="60"
                                y1="-8"
                                x2="60"
                                y2="0"
                            />
                            <line
                                className="chip-pin"
                                x1="80"
                                y1="-8"
                                x2="80"
                                y2="0"
                            />
                            <line
                                className="chip-pin"
                                x1="100"
                                y1="-8"
                                x2="100"
                                y2="0"
                            />
                            <line
                                className="chip-pin"
                                x1="20"
                                y1="120"
                                x2="20"
                                y2="128"
                            />
                            <line
                                className="chip-pin"
                                x1="40"
                                y1="120"
                                x2="40"
                                y2="128"
                            />
                            <line
                                className="chip-pin"
                                x1="60"
                                y1="120"
                                x2="60"
                                y2="128"
                            />
                            <line
                                className="chip-pin"
                                x1="80"
                                y1="120"
                                x2="80"
                                y2="128"
                            />
                            <line
                                className="chip-pin"
                                x1="100"
                                y1="120"
                                x2="100"
                                y2="128"
                            />
                            <line
                                className="chip-pin"
                                x1="-8"
                                y1="20"
                                x2="0"
                                y2="20"
                            />
                            <line
                                className="chip-pin"
                                x1="-8"
                                y1="40"
                                x2="0"
                                y2="40"
                            />
                            <line
                                className="chip-pin"
                                x1="-8"
                                y1="60"
                                x2="0"
                                y2="60"
                            />
                            <line
                                className="chip-pin"
                                x1="-8"
                                y1="80"
                                x2="0"
                                y2="80"
                            />
                            <line
                                className="chip-pin"
                                x1="-8"
                                y1="100"
                                x2="0"
                                y2="100"
                            />
                            <line
                                className="chip-pin"
                                x1="120"
                                y1="20"
                                x2="128"
                                y2="20"
                            />
                            <line
                                className="chip-pin"
                                x1="120"
                                y1="40"
                                x2="128"
                                y2="40"
                            />
                            <line
                                className="chip-pin"
                                x1="120"
                                y1="60"
                                x2="128"
                                y2="60"
                            />
                            <line
                                className="chip-pin"
                                x1="120"
                                y1="80"
                                x2="128"
                                y2="80"
                            />
                            <line
                                className="chip-pin"
                                x1="120"
                                y1="100"
                                x2="128"
                                y2="100"
                            />
                        </g>
                        <path className="chip-link" d="M190 80 H410" />
                        <circle className="chip-node" cx="190" cy="80" r="4" />
                        <circle className="chip-node" cx="410" cy="80" r="4" />
                    </svg>
                </div>
                <h2 className="focus-title">Focus Areas</h2>
                <div className="focus-grid">
                    <div
                        className={`focus-card ${
                            flippedCards[0] ? "is-flipped" : ""
                        }`}
                        role="button"
                        tabIndex={0}
                        aria-pressed={flippedCards[0]}
                        aria-label="Systems for ML details"
                        onClick={() => toggleCard(0)}
                        onKeyDown={(event) => handleCardKeyDown(event, 0)}
                    >
                        <div className="focus-card-inner">
                            <div className="focus-card-face focus-card-front">
                                <span className="focus-badge">Flip me</span>
                                <svg
                                    className="focus-icon"
                                    viewBox="0 0 64 64"
                                    role="img"
                                    aria-hidden="true"
                                >
                                    <rect
                                        x="8"
                                        y="14"
                                        width="48"
                                        height="36"
                                        rx="6"
                                    />
                                    <path d="M18 30h28M18 38h18" />
                                    <circle cx="46" cy="38" r="4" />
                                </svg>
                                <div className="focus-card-title">
                                    Systems for ML
                                </div>
                            </div>
                            <div className="focus-card-face focus-card-back">
                                Design end-to-end systems that co-optimize
                                hardware, software, and runtime for ML
                                workloads. Emphasis on memory hierarchy, data
                                movement, and kernel-level behavior to maximize
                                efficiency.
                            </div>
                        </div>
                    </div>
                    <div
                        className={`focus-card ${
                            flippedCards[1] ? "is-flipped" : ""
                        }`}
                        role="button"
                        tabIndex={0}
                        aria-pressed={flippedCards[1]}
                        aria-label="In-memory computing details"
                        onClick={() => toggleCard(1)}
                        onKeyDown={(event) => handleCardKeyDown(event, 1)}
                    >
                        <div className="focus-card-inner">
                            <div className="focus-card-face focus-card-front">
                                <svg
                                    className="focus-icon"
                                    viewBox="0 0 64 64"
                                    role="img"
                                    aria-hidden="true"
                                >
                                    <rect
                                        x="10"
                                        y="10"
                                        width="44"
                                        height="44"
                                        rx="8"
                                    />
                                    <rect
                                        x="20"
                                        y="20"
                                        width="24"
                                        height="24"
                                        rx="4"
                                    />
                                    <path d="M10 24H4M10 40H4M60 24H54M60 40H54M24 10V4M40 10V4M24 60V54M40 60V54" />
                                </svg>
                                <div className="focus-card-title">
                                    In-Memory Computing
                                </div>
                            </div>
                            <div className="focus-card-face focus-card-back">
                                Evaluate processing-in-memory architectures to
                                reduce data movement and improve energy
                                efficiency. Model latency and energy tradeoffs
                                under circuit and system constraints.
                            </div>
                        </div>
                    </div>
                    <div
                        className={`focus-card ${
                            flippedCards[2] ? "is-flipped" : ""
                        }`}
                        role="button"
                        tabIndex={0}
                        aria-pressed={flippedCards[2]}
                        aria-label="Hardware and software co-design details"
                        onClick={() => toggleCard(2)}
                        onKeyDown={(event) => handleCardKeyDown(event, 2)}
                    >
                        <div className="focus-card-inner">
                            <div className="focus-card-face focus-card-front">
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
                                <div className="focus-card-title">
                                    HW/SW Co-Design
                                </div>
                            </div>
                            <div className="focus-card-face focus-card-back">
                                Co-design architectural parameters and kernel
                                knobs to accelerate critical kernels. Use
                                profiling to guide choices.
                            </div>
                        </div>
                    </div>
                    <div
                        className={`focus-card ${
                            flippedCards[3] ? "is-flipped" : ""
                        }`}
                        role="button"
                        tabIndex={0}
                        aria-pressed={flippedCards[3]}
                        aria-label="Scaling multi-chiplet systems details"
                        onClick={() => toggleCard(3)}
                        onKeyDown={(event) => handleCardKeyDown(event, 3)}
                    >
                        <div className="focus-card-inner">
                            <div className="focus-card-face focus-card-front">
                                <svg
                                    className="focus-icon"
                                    viewBox="0 0 64 64"
                                    role="img"
                                    aria-hidden="true"
                                >
                                    <rect
                                        x="6"
                                        y="16"
                                        width="22"
                                        height="26"
                                        rx="4"
                                    />
                                    <rect
                                        x="36"
                                        y="16"
                                        width="22"
                                        height="26"
                                        rx="4"
                                    />
                                    <path d="M28 29h8" />
                                    <path d="M12 46h40" />
                                </svg>
                                <div className="focus-card-title">
                                    Scaling Multi-Chiplet Systems
                                </div>
                            </div>
                            <div className="focus-card-face focus-card-back">
                                Calibrate multi-chiplet systems using simulators
                                and microkernels to quantify scalability,
                                identify bottlenecks, and propose architectural
                                improvements.
                            </div>
                        </div>
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
                    thesis on resistive CAMs for decision trees reflect my focus
                    on ML acceleration.
                </p>
                <p>
                    I currently work at Arm in Austin, TX as a Senior Research
                    Engineer, where I model multi-chiplet heterogeneous systems
                    in gem5, execute workload-driven performance calibration
                    studies, and perform kernel-level analysis in C/C++/Python.
                    I build automated pipelines for reproducible experiments and
                    share findings with architecture and research teams to
                    inform design decisions.
                </p>
                <p>
                    Across three prior Arm internships, I characterized machine
                    learning and data analytics workloads, identified
                    microarchitectural bottlenecks, and co-designed a
                    SIMD-capable accelerator concept, contributing to two patent
                    filings. My publications span TPAMI, JETC, TETC, and DATE.
                </p>
                <p>
                    I enjoy cross-disciplinary collaboration and mentorship, and
                    I am motivated by research that advances efficient compute
                    for real-world ML systems.
                </p>
                <p>Fun fact: I have a special affinity for transistors.</p>
            </div>
        </div>
    );
};

export default Home;
