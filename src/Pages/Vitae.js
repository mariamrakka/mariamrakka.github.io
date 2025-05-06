import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CardItem from "../Components/CardItem";

const Vitae = () => {
    const sections = [
        {
            id: "education",
            title: "Education",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Doctor of Philosophy, Electrical and Computer Engineering"
                        subtitle="University of California, Irvine | 09/2020 - 06/2025"
                        list={["PI: Professor Fadi J. Kurdahi"]}
                    />
                    <CardItem
                        title="Master of Science, Electrical and Computer Engineering"
                        subtitle="University of California, Irvine | 09/2020 - 06/2022"
                        description="Thesis and Research-Based Master's Degree: courses, 
                        seminars, and thesis requirements."
                        list={[
                            "GPA: 4.0/4.0",
                            "Master Thesis Title: Resistive Content Addressable Memory Design for Decision Tree Acceleration",
                        ]}
                    />
                    <CardItem
                        title="Bachelor of Engineering, Computer and Communications Engineering"
                        subtitle="American University of Beirut, Lebanon | 08/2016 - 05/2020"
                        list={[
                            "GPA: 3.86/4.0",
                            "Graduated with High Distinction",
                            "Minors: Mathematics, Business Administration",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "industry",
            title: "Industry Experience",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Arm, Inc."
                        subtitle="Computer Architecture Research Intern"
                        description="06/2024 - 09/2024 | Austin, TX"
                        list={[
                            "Characterized prominent Machine Learning workloads and identified bottlenecks using perf and Gem5",
                            "Conceptualized a specialized hardware accelerator for the identified bottlenecks to enhance performance on Arm-based architectures, particularly those supporting SIMD extensions",
                            "Estimated the needed hardware resources, including area, cache utilization, and memory bandwidth requirements",
                            "Conducted a software-hardware co-design of the envisioned Arm hardware which resulted in a promising performance improvement for the ML workloads and led to several pending patents",
                        ]}
                    />
                    <CardItem
                        title="Arm, Inc."
                        subtitle="Computer Architecture Research Intern"
                        description="06/2023 - 09/2023 | Austin, TX"
                        list={[
                            "Conducted research about a new Arm architecture extension",
                            "Characterized data analytics benchmark suites on a cluster infrastructure",
                            "Performed bottleneck analysis using perf and Java Flight Recorder, and identified acceleration opportunities using the Arm architecture extension",
                        ]}
                    />
                    <CardItem
                        title="Arm, Inc."
                        subtitle="Machine Learning Research Intern"
                        description="06/2022 - 09/2022 | Austin, TX"
                        list={[
                            "Developed a Machine Learning-based framework to automatically discover efficient configurations of an Arm processor design",
                            "Implemented reinforcement learning, deep neural network, active learning, data preprocessing, and data postprocessing Python scripts",
                            "Interfaced the ML framework with a hardware simulator using bash scripts",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "academic",
            title: "Academic Experience",
            content: (
                <div className="card-section">
                    <CardItem
                        title="University of California, Irvine"
                        subtitle="Graduate Student Researcher"
                        description="10/2020 - Present | Irvine, CA"
                        list={[
                            "Currently leading the effort for proposing a reconfigurable in-memory accelerator for Large Language Model inference in collaboration with KAUST",
                            "Surveyed mixed-precision neural networks which resulted in a first-author publication in TPAMI",
                            "Proposed an analytical simulator for an in-memory Hyperdimensional Reinforcement Learning accelerator which resulted in a first-author journal publication in JETC",
                            "Implemented an accurate functional simulator for faster Decision Tree inference using Python and MATLAB which resulted in a first-author journal publication in TETC",
                        ]}
                    />
                    <CardItem
                        title="King Abdullah University of Science and Technology"
                        subtitle="Visiting Student Researcher"
                        description="04/2024 - 05/2024"
                        list={[
                            "Developed a novel analytical simulator for a reconfigurable in-memory Convolutional Neural Network inference accelerator which resulted in a first-author paper under review",
                            "Conducted a software-hardware co-design for a proposed in-memory inference accelerator for modules in Large Language Models using Python which resulted in a first-author paper published in DATE",
                            "Met and discussed new potential Machine Learning acceleration projects with collaborators at KAUST",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "teaching",
            title: "Teaching Experience",
            content: <div className="card-section"></div>,
        },
        {
            id: "certifications",
            title: "Licenses and Certifications",
            content: <div className="card-section"></div>,
        },
        {
            id: "awards",
            title: "Awards and Fellowships",
            content: <div className="card-section"></div>,
        },
        {
            id: "languages",
            title: "Languages",
            content: <div className="card-section"></div>,
        },
        {
            id: "organizations",
            title: "Organizations",
            content: <div className="card-section"></div>,
        },
        {
            id: "interests-and-hobbies",
            title: "Interests and Hobbies",
            content: <div className="card-section"></div>,
        },
    ];

    return (
        <div className="container home-container">
            <Header />
            <Accordion sections={sections} />
        </div>
    );
};

export default Vitae;
