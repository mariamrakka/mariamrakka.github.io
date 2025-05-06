import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";

const Publications = () => {
    return (
        <div className="container home-container">
            <Header />
            <div className="card-section">
                <ol className="card-list d-grid gap-3">
                    <li>
                        <a href="https://arxiv.org/abs/2411.01417">
                            Rakka, M., Karami, R., Eltawil, A.M., Fouda, M.E.
                            and Kurdahi, F., 2024. BF-IMNA: A Bit Fluid
                            In-Memory Neural Architecture for Neural Network
                            Acceleration. arXiv preprint arXiv:2411.01417.
                        </a>
                    </li>
                    <li>
                        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Fb9_7EMAAAAJ&sortby=pubdate&citation_for_view=Fb9_7EMAAAAJ:YsMSGLbcyi4C">
                            Rakka, M., Fouda, M.E., Khargonekar, P. and Kurdahi,
                            F., 2024. A Review of State-of-the-Art
                            Mixed-Precision Neural Network Frameworks.{" "}
                            <i>
                                IEEE Transactions on Pattern Analysis and
                                Machine Intelligence.
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Fb9_7EMAAAAJ&citation_for_view=Fb9_7EMAAAAJ:eQOLeE2rZwMC">
                            Rakka, Mariam, Walaa Amer, Hanning Chen, Mohsen
                            Imani, and Fadi Kurdahi. "HDRLPIM: A Simulator for
                            Hyper Dimensional Reinforcement Learning based on
                            Processing In Memory."{" "}
                            <i>
                                ACM Journal on Emerging Technologies in
                                Computing Systems.
                            </i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://scholar.google.com/citations?user=Fb9_7EMAAAAJ&hl=en&oi=ao"
                            target="_blank"
                        >
                            Rakka, Mariam, Mohamed E. Fouda, Rouwaida Kanj,
                            Ahmed Eltawil, and Fadi J. Kurdahi. "Design
                            exploration of sensing techniques in 2T-2R resistive
                            ternary CAMs."{" "}
                            <i>
                                IEEE Transactions on Circuits and Systems II:
                                Express Briefs
                            </i>{" "}
                            68, no. 2 (2020): 762-766.
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://scholar.google.com/citations?user=Fb9_7EMAAAAJ&hl=en&oi=ao"
                            target="_blank"
                        >
                            Rakka, Mariam, Rouwaida Kanj, and Ragheb Raad.
                            "Hybrid importance splitting importance sampling
                            methodology for fast yield analysis of memory
                            designs." In 2020{" "}
                            <i>
                                IEEE International Symposium on Circuits and
                                Systems (ISCAS)
                            </i>
                            , pp. 1-5. IEEE, 2020.
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://scholar.google.com/citations?user=Fb9_7EMAAAAJ&hl=en&oi=ao"
                            target="_blank"
                        >
                            Rakka, Mariam, Mohammed E. Fouda, Rouwaida Kanj, and
                            Fadi Kurdahi. "DT2CAM: A Decision Tree to Content
                            Addressable Memory Framework."{" "}
                            <i>
                                IEEE Transactions on Emerging Topics in
                                Computing
                            </i>{" "}
                            (2023).
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://scholar.google.com/citations?user=Fb9_7EMAAAAJ&hl=en&oi=ao"
                            target="_blank"
                        >
                            Rakka, Mariam. Resistive Content Addressable Memory
                            Design for Decision Tree Acceleration. University of
                            California, Irvine, 2022.
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://scholar.google.com/citations?user=Fb9_7EMAAAAJ&hl=en&oi=ao"
                            target="_blank"
                        >
                            Rakka, Mariam, and Rouwaida Kanj. "Importance
                            Splitting Sample Point Reuse for Efficient Memory
                            Yield Estimation." In 2021{" "}
                            <i>
                                IEEE International Symposium on Circuits and
                                Systems (ISCAS)
                            </i>
                            , pp. 1-5. IEEE, 2021.
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Publications;
