import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import Courses from './Courses';
import { MyContext } from "../context/dataContext";
import './CoursesContainer.css';
import { Course } from "../type/course";

interface props {
    courses: Course[];
}

const CoursesContainer: React.FC<props> = ({courses}) => {


    return (
        <main className="container courses-container">
            <span className="courses-title">A broad selection of courses</span>
            <span className="courses-subtitle">Choose from 185,000 online video courses with new additions published every month</span>
            <div className="categories" id="categories">
                <span className="selected-category">Python</span>
            </div>
            <Courses data={courses} />
        </main>
    );
};

export default CoursesContainer;
