import React from "react";
import * as style from "./Card.style";
import { Course } from "../type/course";

const Star = ({ filled }: { filled: boolean }) => (
    <svg style={{ ...style.star, ...(filled ? style.starFilled : {}) }}>
        <use href="#star"></use>
    </svg>
);

interface props {
    data: Course;
}

const Card: React.FC<props> = ({ data }) => {
    return (
        <div style={style.container}>
            <img style={style.image} src={data.image} />
            <span style={style.title}>{data.title}</span>
            <span style={style.subtitle}>{data.instructor}</span>
            <div style={style.ratingContainer}>
                <span style={style.rating}>{data.stars}</span>
                <div style={style.starContainer}>
                    {new Array(5).fill(0).map((v, idx) => (
                        <Star filled={idx < data.stars} />
                    ))}
                </div>
            </div>
            <span style={style.price}>E${data.price}</span>
        </div>
    );
};

export default Card;
