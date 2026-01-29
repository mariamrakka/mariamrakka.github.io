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
