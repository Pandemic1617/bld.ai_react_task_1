import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Course } from "./type/course";
import Courses from "./components/Courses";

const sampleData: Course[] = [
    {
        id: "1",
        image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
        instructor: "Avinash Jain,The Codex",
        price: 20,
        stars: 4,
        title: "Learn Python: The Complete Python Programming Course",
    },
    {
        id: "2",
        image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
        title: "Learning Python for Data Analysis and Visualization",
        instructor: "Jose Portilla",
        price: 39,
        stars: 2,
    },
    {
        id: "3",
        price: 99,
        stars: 4,
        image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
        title: "Python for Beginners - Learn Programming from scratch",
        instructor: "Edwin Diaz, Coding FAcutly Solutaions",
    },
];

function App() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "70%" }}>
                <Courses data={sampleData} />
            </div>
        </div>
    );
}

export default App;
