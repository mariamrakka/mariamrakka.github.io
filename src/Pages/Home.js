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
                    I am an enthusiastic learner currently pursuing a PhD in
                    Electrical and Computer Engineering at the University of
                    California, Irvine. Having completed my MS in the same field
                    in 2022 with a 4.0/4.0 GPA, my thesis focused on
                    accelerating decision tree inference on in-memory computing
                    architectures. I attained my BE in Computer and
                    Communications Engineering from the American University of
                    Beirut with high distinction in May 2020, along with minors
                    in Mathematics and Business Administration.
                </p>
                <p>
                    Over three consecutive summers at Arm, Inc., I contributed
                    to advancing Arm-based architectures through cutting-edge
                    research and development. My work included characterizing
                    Machine Learning and data analytics workloads to identify
                    bottlenecks, designing a specialized hardware accelerator
                    that leveraged SIMD extensions for performance gains, and
                    conducting software-hardware co-design, which resulted in
                    several pending patents. I also developed a Machine
                    Learning-based framework for optimizing Arm processor
                    configurations and investigated acceleration opportunities
                    through novel architecture extensions, reinforcing my
                    expertise in bridging software and hardware innovation.
                </p>
                <p>
                    Beyond my technical acumen, I am passionate about connecting
                    dots and collaborating with people in interdisciplinary
                    fields. My love for constant learning fuels my drive to stay
                    at the forefront of technological advancements. Currently, I
                    remain actively engaged in diverse research and
                    hardware/software projects within Prof. Fadi J. Kurdahi's
                    group at UCI, where my areas of interest encompass machine
                    learning acceleration, electronics, and software/hardware
                    codesign.
                </p>
                <p>
                    Committed to making a meaningful contribution to the field
                    and society at large, I firmly believe that fostering
                    societal progress is just as vital as achieving personal
                    milestones.
                </p>
                <p>Fun fact: I have a special affinity for transistors.</p>
            </div>
            <div className="row">
                <div className="col-12 bio-section text-center">
                    <h2>Research Interests</h2>
                    <p className="text-center">
                        Systems for Machine Learning (ML), Electronics,
                        Software/Hardware Co-design
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
