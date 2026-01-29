import React from "react";
import Header from "../Components/Header";

const Publications = () => {
    const scholarProfile =
        "https://scholar.google.com/citations?user=Fb9_7EMAAAAJ&hl=en";

    return (
        <div className="container home-container">
            <Header />
            <div className="card-section">
                <ol className="card-list d-grid gap-3">
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rakka, M., et al. (2025). SoftmAP:
                            Software-Hardware Co-design for Integer-Only
                            Softmax on Associative Processors. Design,
                            Automation & Test in Europe (DATE).
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rakka, M. (2025). In-Memory Computing to Accelerate
                            Machine Learning. PhD dissertation, University of
                            California, Irvine.
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rakka, M., et al. (2024). A Review of
                            State-of-the-Art Mixed-Precision Neural Network
                            Frameworks.{" "}
                            <i>
                                IEEE Transactions on Pattern Analysis and
                                Machine Intelligence.
                            </i>
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rakka, M., et al. (2024). HDRLPIM: A Simulator for
                            Hyperdimensional Reinforcement Learning based on
                            Processing In Memory.{" "}
                            <i>
                                ACM Journal on Emerging Technologies in
                                Computing Systems.
                            </i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://arxiv.org/abs/2411.01417"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rakka, M., et al. (2024). BF-IMNA: A Bit Fluid
                            In-Memory Neural Architecture for Neural Network
                            Acceleration. arXiv:2411.01417.
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Amer, W., Rakka, M., et al. (2024). FPonAP:
                            Implementation of Floating Point Operations on
                            Associative Processors. IEEE Embedded Systems
                            Letters (accepted).
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rakka, M., et al. (2023). DT2CAM: A Decision Tree to
                            Content Addressable Memory Framework.{" "}
                            <i>
                                IEEE Transactions on Emerging Topics in
                                Computing.
                            </i>
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Amer, W., Rakka, M., et al. (2023). Hardware
                            Implementation and Evaluation of an Information
                            Processing Factory. IFIP/IEEE VLSI-SoC.
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sperling, N., Bendrick, A., Stohrmann, D., Ernst,
                            R., Donyanavard, B., Maurer, F., Lenke, O.,
                            Surhonne, A., Herkersdorf, A., Amer, W., Melo, C.,
                            Chen, P., Hoang, Q., Karami, R., Maity, B., Nikolian,
                            P., Rakka, M., Seo, D., Yi, S., Seo, M., Dutt, N.,
                            Kurdahi, F. (2023). Information Processing Factory
                            2.0 - Self-Awareness for Autonomous Collaborative
                            Systems. Design, Automation & Test in Europe
                            (DATE).
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rakka, M. (2022). Resistive Content Addressable
                            Memory Design for Decision Tree Acceleration. MS
                            thesis, University of California, Irvine.
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rakka, M., et al. (2021). Importance Splitting
                            Sample Point Reuse for Efficient Memory Yield
                            Estimation. IEEE International Symposium on
                            Circuits and Systems (ISCAS).
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rakka, M., et al. (2020). Design exploration of
                            sensing techniques in 2T-2R resistive ternary CAMs.{" "}
                            <i>
                                IEEE Transactions on Circuits and Systems II:
                                Express Briefs.
                            </i>
                        </a>
                    </li>
                    <li>
                        <a
                            href={scholarProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rakka, M., et al. (2020). Hybrid importance
                            splitting importance sampling methodology for fast
                            yield analysis of memory designs. IEEE International
                            Symposium on Circuits and Systems (ISCAS).
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Publications;
