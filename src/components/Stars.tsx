import React from "react";
import * as style from "./Stars.style";
import { Course } from "../type/course";

const Star = ({ filled, size }: { filled: boolean; size: number }) => (
    <svg style={{ width: size, height: size, ...style.star, ...(filled ? style.starFilled : {}) }}>
        <use href="#star"></use>
    </svg>
);

interface props {
    amount: number;
    size?: number;
}

const Stars: React.FC<props> = ({ amount, size }) => {
    return (
        <div>
            {new Array(5).fill(0).map((v, idx) => (
                <Star filled={idx < amount} size={size || 32} />
            ))}
        </div>
    );
};

export default Stars;
