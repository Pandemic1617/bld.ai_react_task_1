import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/dataContext";
import { Course } from "../type/course";
import CoursesContainer from "./CoursesContainer";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import SingleCoursePage from "./SingleCoursePage";
import TopCategories from "./TopCategories";

interface props {}

const SingleCourseEndpoint: React.FC<props> = ({}) => {
    const [searchText, setSearchText] = React.useState("");

    const { courseId } = useParams();

    const a = useContext(MyContext);

    const course = a.find((v) => v.id === courseId);

    if (!course) throw new Error("Course not found, please check the course id, " + courseId);

    return <SingleCoursePage course={course} />;
};

export default SingleCourseEndpoint;
