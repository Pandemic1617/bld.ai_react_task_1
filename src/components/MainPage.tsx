import React, { useContext } from "react";
import { MyContext } from "../context/dataContext";
import CoursesContainer from "./CoursesContainer";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import TopCategories from "./TopCategories";

interface props {}

const MainPage: React.FC<props> = () => {
    const [searchText, setSearchText] = React.useState("");
    const a = useContext(MyContext);

    return (
        <>
            <Navbar setSearchText={setSearchText} />
            <MainHeader />
            <CoursesContainer courses={a.filter((v) => v.title.includes(searchText))} />
            <TopCategories />
        </>
    );
};

export default MainPage;
