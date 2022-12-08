import React from "react";
import PropTypes from "prop-types";

const ArticleCard = ({ title, imgURL, createdAt, description }) => {
    return (
        <div className="card bg-dark text-white">
            <img className="card-img" src={imgURL} alt="Card image" />
            <div className="card-img-overlay">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{createdAt}</p>
            </div>
        </div>
    );
};

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ArticleCard;
