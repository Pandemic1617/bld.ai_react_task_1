import React from "react";
import "./MainHeader.css";
interface props {}

const MainHeader: React.FC<props> = () => {
    return (
        <header>
            <div className="head-card">
                New to Udemy? Lucky you.
                <span>Courses start at E$169.99. Get your new-student offer before it expires.</span>
            </div>
            <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/easypeasy.svg" alt="couldn't find the alarm clock image :(" />
        </header>
    );
};

export default MainHeader;
