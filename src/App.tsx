import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Course } from "./type/course";
import Courses from "./components/Courses";
import { MyContext } from "./context/dataContext";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import SingleCourseEndpoint from "./components/SingleCourseEndpoint";

const sampleData: Course[] = [
    {
        id: "1",
        image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
        instructor: "Avinash Jain,The Codex",
        price: 20,
        stars: 4,
        title: "Learn Python: The Complete Python Programming Course",
        description:
            "description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
        points: ["Learn Python Programming from scratch", "Learn Python Programming from scratch"],
        totalHours: 2.5,
        updatedDate: "September 2021",

        instructors: [
            {
                id: "1",
                courses: 123,
                description:
                    "a course instructor, lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem ",
                image: "https://img-c.udemycdn.com/user/200_H/6772884_fcfc_2.jpg",
                name: "Avinash Jain",
                rating: 4.5,
                reviews: 1234,
                shortDescription: "a course instructor",
                students: 12345,
            },
        ],
        reviews: [
            {
                id: "1",
                image: "https://img-c.udemycdn.com/user/200_H/6772884_fcfc_2.jpg",
                name: "Avinash Jain",
                rating: 5,
                text: "I am reviewing my own course ;)",
                time: "Yesterday",
            },
        ],
        students: 1000,
        requirements: ["NO programming knowledge required"],
        content: {
            lectures: 42,
            length: "2h 36m",
            sections: [
                {
                    length: "14min",
                    name: "Programming Fundamentals",
                    items: [
                        ["Compile VS Interpreted Languages", "5:43"],
                        ["Strings and numbers", "1:36"],
                        ["Variables", "3:49"],
                        ["Lists, Arrays or Collections", "3:55"],
                    ],
                },
                {
                    length: "10min",
                    name: "Getting Started with Python",
                    items: [
                        ["Installing Python", "2:43"],
                        ["Running Python", "1:36"],
                        ["Python Interpreter", "3:49"],
                        ["Python Scripts", "3:55"],
                    ],
                },
                {
                    length: "10min",
                    name: "Python Basics",
                    items: [
                        ["Variables", "2:43"],
                        ["Data Types", "1:36"],
                        ["Numbers", "3:49"],
                        ["Strings", "3:55"],
                    ],
                },
            ],
        },
    },
    {
        id: "2",
        image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
        title: "Learning Python for Data Analysis and Visualization",
        instructor: "Jose Portilla",
        price: 39,
        stars: 2,
        description:
            "description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
        points: ["Learn Python Programming from scratch", "Learn Python Programming from scratch"],
        totalHours: 3,
        updatedDate: "Octover 2019",
        instructors: [
            {
                id: "1",
                courses: 123,
                description:
                    "a course instructor, lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem ",
                image: "https://img-c.udemycdn.com/user/200_H/6772884_fcfc_2.jpg",
                name: "Avinash Jain",
                rating: 4.5,
                reviews: 1234,
                shortDescription: "a course instructor",
                students: 12345,
            },
        ],
        reviews: [
            {
                id: "1",
                image: "https://img-c.udemycdn.com/user/200_H/6772884_fcfc_2.jpg",
                name: "Avinash Jain",
                rating: 5,
                text: "I am reviewing my own course ;)",
                time: "Yesterday",
            },
        ],
        students: 2000,
        requirements: ["NO programming knowledge required"],
        content: {
            lectures: 42,
            length: "2h 36m",
            sections: [
                {
                    length: "14min",
                    name: "Programming Fundamentals",
                    items: [
                        ["Compile VS Interpreted Languages", "5:43"],
                        ["Strings and numbers", "1:36"],
                        ["Variables", "3:49"],
                        ["Lists, Arrays or Collections", "3:55"],
                    ],
                },
                {
                    length: "10min",
                    name: "Getting Started with Python",
                    items: [
                        ["Installing Python", "2:43"],
                        ["Running Python", "1:36"],
                        ["Python Interpreter", "3:49"],
                        ["Python Scripts", "3:55"],
                    ],
                },
                {
                    length: "10min",
                    name: "Python Basics",
                    items: [
                        ["Variables", "2:43"],
                        ["Data Types", "1:36"],
                        ["Numbers", "3:49"],
                        ["Strings", "3:55"],
                    ],
                },
            ],
        },
    },
    {
        id: "3",
        price: 99,
        stars: 4,
        image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
        title: "Python for Beginners - Learn Programming from scratch",
        instructor: "Edwin Diaz, Coding FAcutly Solutaions",
        description:
            "description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
        points: ["Learn Python Programming from scratch", "Learn Python Programming from scratch"],
        totalHours: 3.5,
        updatedDate: "September 2020",
        instructors: [
            {
                id: "1",
                courses: 123,
                description:
                    'Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial entrepreneur with multiple online businesses, ranging from online jewelry shops, affiliate websites, application development and consultations services, personal online schools, etc.                    With over one million students, and clients growing by the thousands a day, Mr. Diaz lets the numbers speak for themselves.                                        Founding multiple online companies have allowed Mr. Diaz to have the time to teach others. He currently teaches web technologies on different online platforms. He also teaches life coaching sessions to help others achieve a high level of success in many areas of life.                                        For Mr. Diaz, there is nothing more rewarding than helping others become successful.                                        His ability to transmit energy, enthusiasm, and complex knowledge allows him to do what he does best "Teach".                                        Teaching is not just a job for Mr. Diaz but a way of life that continues to flourish every single day.                                        Apart from teaching he enjoys spending part of his time with his family.',
                image: "https://img-c.udemycdn.com/user/200_H/34613172_6fb4.jpg",
                name: "Coding Faculty Solutions",
                rating: 4.5,
                reviews: 1234,
                shortDescription: "a course instructor",
                students: 12345,
            },
        ],
        reviews: [
            {
                id: "1",
                image: "https://img-c.udemycdn.com/user/200_H/34613172_6fb4.jpg",
                name: "Avinash Jain",
                rating: 5,
                text: "I am reviewing my own course ;)",
                time: "Yesterday",
            },
        ],
        students: 3000,
        requirements: ["NO programming knowledge required"],
        content: {
            lectures: 42,
            length: "2h 36m",
            sections: [
                {
                    length: "14min",
                    name: "Programming Fundamentals",
                    items: [
                        ["Compile VS Interpreted Languages", "5:43"],
                        ["Strings and numbers", "1:36"],
                        ["Variables", "3:49"],
                        ["Lists, Arrays or Collections", "3:55"],
                    ],
                },
                {
                    length: "10min",
                    name: "Getting Started with Python",
                    items: [
                        ["Installing Python", "2:43"],
                        ["Running Python", "1:36"],
                        ["Python Interpreter", "3:49"],
                        ["Python Scripts", "3:55"],
                    ],
                },
                {
                    length: "10min",
                    name: "Python Basics",
                    items: [
                        ["Variables", "2:43"],
                        ["Data Types", "1:36"],
                        ["Numbers", "3:49"],
                        ["Strings", "3:55"],
                    ],
                },
            ],
        },
    },
];

function App() {
    if (!sampleData) return null;

    return (
        <MyContext.Provider value={sampleData}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/course/:courseId" element={<SingleCourseEndpoint />} />
            </Routes>
        </MyContext.Provider>
    );
}

export default App;
