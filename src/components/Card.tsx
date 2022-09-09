import React from "react";
import * as style from "./Card.style";
import { Course } from "../type/course";
import Stars from "./Stars";
import { useNavigate } from "react-router-dom";

interface props {
    data: Course;
}

const Card: React.FC<props> = ({ data }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const navigate = useNavigate();

    return (
        <div style={style.container} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => navigate("/course/" + data.id)}>
            <div style={style.cardContainer}>
                <img style={style.image} src={data.image} />
                <span style={style.title}>{data.title}</span>
                <span style={style.subtitle}>{data.instructor}</span>
                <div style={style.ratingContainer}>
                    <span style={style.rating}>{data.stars}</span>
                    <Stars amount={data.stars} />
                </div>
                <span style={style.price}>E${data.price}</span>
            </div>
            {isHovered && (
                <div style={style.hoverPreviewContainer}>
                    <h3 style={style.hoverPreviewTitle}>{data.title}</h3>
                    <p style={style.hoverPreviewDate}>Updated {data.updatedDate}</p>
                    <span style={style.hoverPreviewInfo}>
                        {data.totalHours} {"\u25CF"} All Levels {"\u25CF"} Subtitles
                    </span>
                    <span style={style.hoverPreviewDescription}>{data.description}</span>
                    {data.points.map((v) => (
                        <span>
                            {"\u2713"} {v}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Card;
