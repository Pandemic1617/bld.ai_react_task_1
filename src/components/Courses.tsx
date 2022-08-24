import React from "react";
import * as style from "./Courses.style";
import { Course } from "../type/course";
import Card from "./Card";

interface props {
    data: Course[];
}

const Courses: React.FC<props> = ({ data }) => {
    return (
        <div style={style.container}>
            <div style={style.title}>Expand your career opportunities with Python</div>
            <div style={style.description}>
                Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data
                science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to
            </div>
            <button style={style.button}>Explore Python</button>
            <div style={style.coursesWrapper}>
                <div style={style.courses}>
                    {data.map((v) => (
                        <Card data={v} key={v.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
