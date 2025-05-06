import React from "react";

const CardItem = ({ title, subtitle, description, list, children }) => (
    <div className="card-item">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
        {description && <p className="card-description">{description}</p>}
        {list && (
            <ul className="card-list">
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        )}
        {children}
    </div>
);

export default CardItem;
