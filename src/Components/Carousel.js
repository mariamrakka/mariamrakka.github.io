import React from "react";

const Carousel = ({ id = "myCarousel", slides = [] }) => {
    if (!slides.length) return null;

    return (
        <div id={id} className="carousel slide myCarousel">
            <div className="carousel-inner">
                {slides.map(({ src, alt, captionTitle, captionText }, i) => (
                    <div
                        key={i}
                        className={`carousel-item ${i === 0 ? "active" : ""}`}
                    >
                        <img src={src} className="d-block w-100" alt={alt} />
                        {(captionTitle || captionText) && (
                            <div className="slide-caption mt-2">
                                {captionTitle && <h5>{captionTitle}</h5>}
                                {captionText && (
                                    <p className="slide-caption">
                                        {captionText}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="carousel-indicators static-indicators">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        data-bs-target={`#${id}`}
                        data-bs-slide-to={i}
                        className={i === 0 ? "active" : ""}
                        aria-current={i === 0 ? "true" : undefined}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
