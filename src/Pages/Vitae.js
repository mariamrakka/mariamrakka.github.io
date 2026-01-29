import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CardItem from "../Components/CardItem";

const Vitae = () => {
    const sections = [
        {
            id: "summary",
            title: "Summary",
            content: (
                <div className="card-section">
                    <CardItem
                        description="Computer architecture researcher focused on systems for machine learning and in-memory computing."
                        list={[
                            "PhD, Electrical and Computer Engineering (UCI, 06/2025)",
                            "Multi-chiplet heterogeneous system modeling in gem5 and workload-driven performance calibration",
                            "Kernel-level analysis (C/C++/Python) and software-hardware co-design leading to two patent filings",
                            "Publications in TPAMI, JETC, TETC, DATE, and more",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "education",
            title: "Education",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Doctor of Philosophy, Electrical and Computer Engineering"
                        subtitle="University of California, Irvine | 09/2020 - 06/2025"
                        description="Dissertation: In-Memory Computing to Accelerate Machine Learning."
                        list={[
                            "Advisor: Professor Fadi J. Kurdahi",
                            "GPA: 4.00/4.00",
                        ]}
                    />
                    <CardItem
                        title="Master of Science, Electrical and Computer Engineering"
                        subtitle="University of California, Irvine | 09/2020 - 06/2022"
                        description="Thesis: Resistive Content Addressable Memory Design for Decision Tree Acceleration."
                        list={[
                            "GPA: 4.00/4.00",
                        ]}
                    />
                    <CardItem
                        title="Bachelor of Engineering, Computer and Communications Engineering"
                        subtitle="American University of Beirut, Lebanon | 08/2016 - 05/2020"
                        list={[
                            "Cumulative GPA: 88.67/100",
                            "Graduated with high distinction",
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
                        subtitle="Graduate Research Engineer (Grade 4)"
                        description="06/2025 - Present | Austin, TX"
                        list={[
                            "Model multi-chiplet heterogeneous systems in gem5 to evaluate scalability across diverse workloads",
                            "Design and execute performance calibration studies to collect bandwidth, cache, and latency metrics",
                            "Perform kernel-level analysis of instruction mix, vectorization, locality, and synchronization patterns",
                            "Build automated build/run/post-processing pipelines (Python/Bash) to ensure reproducibility",
                            "Author internal reports and present findings to architecture and research teams",
                        ]}
                    />
                    <CardItem
                        title="Arm, Inc."
                        subtitle="Computer Architecture Research Intern"
                        description="06/2024 - 09/2024 | Austin, TX"
                        list={[
                            "Characterized machine learning workloads using perf and gem5 to profile instruction mixes and bottlenecks",
                            "Conceptualized a SIMD-capable accelerator for critical kernels and estimated area and bandwidth needs",
                            "Explored integration into the Arm pipeline and co-designed software-hardware interfaces",
                            "Contributed to two patent filings based on the developed architectural techniques",
                        ]}
                    />
                    <CardItem
                        title="Arm, Inc."
                        subtitle="Computer Architecture Research Intern"
                        description="06/2023 - 09/2023 | Austin, TX"
                        list={[
                            "Investigated a tightly coupled CPU extension to accelerate data analytics workloads",
                            "Deployed Apache Hadoop and Spark benchmarks on a multi-node cluster",
                            "Performed bottleneck analysis with perf and Java Flight Recorder to identify optimization opportunities",
                        ]}
                    />
                    <CardItem
                        title="Arm, Inc."
                        subtitle="Machine Learning Research Intern"
                        description="06/2022 - 09/2022 | Austin, TX"
                        list={[
                            "Built an ML-based automated design space exploration framework for Arm processors",
                            "Implemented reinforcement learning, deep neural networks, and active learning pipelines in Python",
                            "Interfaced the ML framework with a hardware simulator using Bash automation",
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
                        description="10/2020 - 05/2025 | Irvine, CA"
                        list={[
                            "Led the effort to propose a reconfigurable in-memory accelerator for large language model inference in collaboration with KAUST",
                            "Surveyed mixed-precision neural networks, resulting in a first-author publication in TPAMI",
                            "Proposed an analytical simulator for a hyperdimensional reinforcement learning accelerator, resulting in a first-author JETC publication",
                            "Implemented a functional simulator for decision tree inference using Python and MATLAB, resulting in a first-author TETC publication",
                        ]}
                    />
                    <CardItem
                        title="King Abdullah University of Science and Technology"
                        subtitle="Visiting Student Researcher"
                        description="04/2024 - 05/2024 | Thuwal, Saudi Arabia"
                        list={[
                            "Developed an analytical simulator for a reconfigurable in-memory CNN inference accelerator",
                            "Conducted software-hardware co-design for in-memory LLM modules, resulting in a first-author DATE paper",
                            "Explored new machine learning acceleration projects with KAUST collaborators",
                        ]}
                    />
                    <CardItem
                        title="University of California, Irvine"
                        subtitle="Hardware Engineering Intern"
                        description="07/2019 - 09/2019 | Irvine, CA"
                        list={[
                            "Implemented a real-time temperature tracking solution on the Nexys Video FPGA",
                            "Used the XADC DRP interface and customized a FIFO core to store temperature readings",
                            "Designed a DAC module and displayed analog temperature values on the OLED",
                            "Extended the internship into a senior-year project on the Information Processing Factory",
                        ]}
                    />
                    <CardItem
                        title="American University of Beirut"
                        subtitle="Undergraduate Student Researcher"
                        description="01/2018 - 06/2020 | Beirut, Lebanon"
                        list={[
                            "Explored energy, latency, and quality tradeoffs in RRAM-based ternary CAMs",
                            "Proposed hybrid algorithms for rare-fail event estimation and evaluated them",
                            "Implemented algorithms in MATLAB/Perl/HSPICE for 16nm SRAM designs",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "teaching",
            title: "Teaching Experience",
            content: (
                <div className="card-section">
                    <CardItem
                        title="University of California, Irvine"
                        subtitle="Teaching Assistant (Introduction to Python Programming / Advanced C Programming / Intro to Digital Systems)"
                        description="09/2021 - 03/2022, 01/2025 - 03/2025 | Irvine, CA"
                        list={[
                            "Taught problem solving, data structures, and digital design principles",
                            "Prepared assignments and exams and led weekly discussions and labs",
                            "Built Bash scripts for grading and reported progress to course professors",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "projects",
            title: "Projects",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Canny Edge Decoder"
                        subtitle="01/2021 - 04/2021 | Tools: C, SpecC, RISC-V"
                        list={[
                            "Designed a multi-threaded Canny Edge Decoder",
                            "Migrated sequential C code to a RISC-V virtual platform with LCD and camera drivers",
                            "Completed a parallel, pipelined system-level design",
                        ]}
                    />
                    <CardItem
                        title="Novel 4-Bit ALU"
                        subtitle="01/2019 - 05/2019 | Tools: Cadence"
                        list={[
                            "Proposed an efficient 4-bit ALU design using modified Shannon theorem",
                            "Designed a 90nm adder and performed schematic-level simulations",
                            "Demonstrated improved compactness, speed, and power efficiency",
                        ]}
                    />
                    <CardItem
                        title="Quantum Cellular Automata Literature Review"
                        subtitle="01/2019 - 05/2019 | Tools: Research"
                        list={[
                            "Reviewed QCA fundamentals, layouts, and clocking mechanisms",
                            "Compared logic gate implementations and analyzed tradeoffs",
                            "Delivered a report and presentation for a VLSI course",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "skills",
            title: "Skills",
            content: (
                <div className="card-section">
                    <CardItem
                        list={[
                            "Programming: C, C++, Python, MATLAB, SpecC, Verilog/VHDL, Perl, Shell, LaTeX",
                            "Architecture/Simulation: gem5, OrCAD PSpice, HSPICE",
                            "Machine Learning: LLMs, CNNs, Decision Trees, Reinforcement Learning",
                            "Tools: perf, Java Flight Recorder, Flame Graphs, Visual Studio Code, Cadence, GitHub, Overleaf, Microsoft Office",
                            "Specialized: In-memory computing, hardware acceleration, statistical analysis methodologies",
                            "Soft skills: Research, teambuilding, leadership, written and verbal communication, time management",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "certifications",
            title: "Licenses and Certifications",
            content: (
                <div className="card-section">
                    <CardItem
                        list={[
                            "10-week Hardware Design Program, VLSI System Design (05/2023)",
                            "High Level Synthesis Tutorial - DAC 2021 (01/2022)",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "awards",
            title: "Awards and Fellowships",
            content: (
                <div className="card-section">
                    <CardItem
                        list={[
                            "iREDEFINE Fellow, National Science Foundation (03/2025)",
                            "DAC'21 Young Fellow (12/2021)",
                            "Best Computer Hardware System Project, Maroun Semaan Faculty of Engineering and Architecture (05/2020)",
                            "Dean's Honor List, Maroun Semaan Faculty of Engineering and Architecture (09/2016 - 06/2020)",
                            "One-year PhD Fellowship (Merit-Based), University of California, Irvine (09/2020 - 09/2021)",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "service",
            title: "Professional Service and Mentoring",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Peer Reviewer"
                        subtitle="Journals and Conferences | 2020 - 2025"
                        list={[
                            "IEEE Circuits and Systems Magazine (Paper ID: CASM-00026-2025)",
                            "22nd International Conference on Hardware/Software Codesign and System Synthesis (Paper #158)",
                            "IEEE 66th International Midwest Symposium on Circuits and Systems (Paper #168 and #198)",
                            "IEEE Transactions on Circuits and Systems I: Regular Papers (Paper ID: TCAS-I-02215-2023)",
                            "ACM Transactions on Architecture and Code Optimization (Manuscript ID: TACO-2024-117)",
                            "IEEE Transactions on Computers (Review Form ID: TC-2023-12-0735)",
                        ]}
                    />
                    <CardItem
                        title="Mentor, Techotolia Robotics (Team #7748)"
                        subtitle="FIRST Robotics Competition | 07/2025 - Present"
                        list={[
                            "Mentor a high-school FRC team through regular Zoom meetings",
                            "Provide technical guidance, planning, and materials preparation",
                            "Apply for funding to support registration and material costs",
                        ]}
                    />
                    <CardItem
                        title="Mentor, All Girls Code"
                        subtitle="08/2018"
                        list={[
                            "Mentored a hackathon where students built apps and websites",
                            "Helped organize the event and answered technical questions",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "volunteering",
            title: "Volunteering Experience",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Lebanese Red Cross"
                        subtitle="Youth Member | 10/2018 - 05/2019"
                        list={[
                            "Completed training in STD prevention, disaster preparedness, and response",
                            "Supported activities for elderly community members",
                        ]}
                    />
                    <CardItem
                        title="BASSMA"
                        subtitle="Tutor | 07/2018 - 08/2018"
                        list={[
                            "Tutored public school students in grades 7-9 through the Night School Program",
                            "Supported students from underprivileged families",
                        ]}
                    />
                    <CardItem
                        title="AUB Outlook"
                        subtitle="Writer | 10/2018 - 06/2020"
                        list={[
                            "Published Arabic articles on social issues",
                            "Collaborated with writers and editors on a weekly basis",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "languages",
            title: "Languages",
            content: (
                <div className="card-section">
                    <CardItem
                        list={[
                            "English (Fluent)",
                            "Arabic (Fluent)",
                            "French (Elementary proficiency)",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "interests-and-hobbies",
            title: "Interests and Hobbies",
            content: (
                <div className="card-section">
                    <CardItem
                        list={[
                            "Writing articles",
                            "Reading novels",
                            "Watching crime docu-series",
                            "Hiking",
                            "Chasing sunsets",
                            "Weightlifting",
                        ]}
                    />
                </div>
            ),
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
