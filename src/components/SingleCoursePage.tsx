import React, { useContext } from "react";
import { Course } from "../type/course";
import CoursesContainer from "./CoursesContainer";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import TopCategories from "./TopCategories";
import StarIcon from "@mui/icons-material/Star";
import "./SingleCoursePage.css";
import Stars from "./Stars";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import LanguageIcon from "@mui/icons-material/Language";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import { Avatar, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MyContext } from "../context/dataContext";
import GroupIcon from "@mui/icons-material/Group";
import { Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Sticky from "react-stickynode";

const MAX_CHARACTERS_IN_SUBTITLE = 250;

interface props {
    course: Course;
}

const SingleCoursePage: React.FC<props> = ({ course }) => {
    const [searchText, setSearchText] = React.useState("");

    const courses = useContext(MyContext);

    const featuredReview = course.reviews[0];

    return (
        <div className="single-course-page-body">
            <Navbar setSearchText={setSearchText} />
            <div className="course-header">
                {course.title}
                <div className="course-header-data">
                    {course.stars}
                    <StarIcon
                        sx={{ color: "#e59819" }}
                        // amount={course.stars} size={12}
                    />
                    ({course.reviews.length}) {course.students} Students
                </div>
            </div>
            <header className="single-course-page-header">
                <span className="single-course-page-header-path">
                    Development {" > "} Programming Languages {" > "} Python
                </span>
                <span className="single-course-page-header-title">{course.title}</span>
                <span className="single-course-page-header-subtitle">{course.description.slice(0, MAX_CHARACTERS_IN_SUBTITLE)}</span>

                <span className="single-course-page-header-desc">
                    <span className="single-course-page-header-stars">{course.stars}</span> <Stars amount={course.stars} size={10} />({course.reviews.length}) {course.students} Students
                </span>
                <span>Created by {course.instructors.map((v) => v.name).join(", ")}</span>
                <span>
                    <NewReleasesIcon /> Last updated {course.updatedDate} <LanguageIcon /> English <ClosedCaptionIcon /> English {"[Auto]"}
                </span>
            </header>
            <main className="single-course-page">
                <div className="single-course-page-main">
                    <div className="single-course-page-main-what-youll-learn">
                        <h1>What you'll learn</h1>
                        <div className="single-course-page-main-what-youll-learn-points">
                            {course.points.map((v) => (
                                <span>{"\u2713  " + v}</span>
                            ))}
                        </div>
                    </div>
                    <div className="single-course-age-main-content">
                        <h1 className="single-course-page-main-content-title">Course content</h1>
                        {course.content.sections.length} sections {"\u25CF"} {course.content.lectures} {"\u25CF"} {course.content.length} total length
                        {course.content.sections.map((v) => (
                            <Accordion className="single-course-page-main-content-accordion-container" sx={{ backgroundColor: "rgb(230,230,230)" }}>
                                <AccordionSummary sx={{ flexDirection: "row-reverse" }}>
                                    <span className="single-course-page-main-content-accordion-name">{v.name}</span>{" "}
                                    <span className="single-course-page-main-content-accordion-length">
                                        {v.items.length} {"\u25CF"} {v.length}
                                    </span>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {v.items.map((v) => (
                                        <div className="single-course-page-main-content-accordion-details-container">
                                            <PlayCircleIcon />
                                            {v[0]} <span>{v[1]}</span>
                                        </div>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                    <div className="single-course-page-main-requirements">
                        <h1 className="single-course-page-main-requirements-title">Requirements</h1>
                        <div className="single-course-page-main-requirements-data">
                            {course.requirements.map((v) => (
                                <span>{"\u25CF  " + v}</span>
                            ))}
                        </div>
                    </div>
                    <div className="single-course-page-main-description">
                        <h1 className="single-course-page-main-description-title">Description</h1>
                        <div className="single-course-page-main-description-data">{course.description}</div>
                    </div>

                    <div className="single-course-page-main-featured-review">
                        <h1 className="single-course-page-main-featured-review-title">Featured review</h1>
                        <div className="single-course-page-main-featured-review-head">
                            <Avatar src={featuredReview.image} />
                            {featuredReview.name}
                        </div>
                        <div className="single-course-page-main-featured-review-stars">
                            <Stars amount={featuredReview.rating} size={15} />
                        </div>
                        <div className="single-course-page-main-featured-review-text">{featuredReview.text}</div>
                    </div>
                    <div className="single-course-page-main-featured-also-bought">
                        <h1 className="single-course-page-main-featured-also-bought-title">Students also bought</h1>
                        <div className="single-course-page-main-featured-also-bought-courses">
                            {courses
                                .map((v) => (
                                    <div className="also-course-card-container">
                                        <img src={v.image} />
                                        <div className="also-course-card-container-title">
                                            <span>{v.title}</span>
                                            <span>
                                                {v.totalHours} total hours {"\u25CF"} {v.updatedDate} last updated
                                            </span>
                                        </div>
                                        <div>
                                            {v.stars} <StarIcon sx={{ color: "#e59819" }} />
                                        </div>
                                        <div>
                                            <GroupIcon />
                                            {v.students}
                                        </div>
                                        <div>${v.price}</div>
                                        <div>
                                            <FavoriteBorderIcon sx={{ border: "1px solid black", borderRadius: "100%", padding: "5px", fontSize: 30 }} />
                                        </div>
                                    </div>
                                ))
                                .reduce((prev, curr, idx) => (idx ? [...prev, <Divider />, curr] : [...prev, curr]), [] as JSX.Element[])}
                        </div>
                    </div>
                    <div className="single-course-page-main-instructors">
                        <h1 className="single-course-page-main-instructors-title">Instructors</h1>
                        <div className="single-course-page-main-instructors-data">
                            {course.instructors.map((v) => (
                                <div className="single-course-page-main-instructors-data-container">
                                    <div className="single-course-page-main-instructors-data-container-name">{v.name}</div>
                                    <div className="single-course-page-main-instructors-data-container-head">
                                        <Avatar src={v.image} sx={{ margin: "20px", height: "60px", width: "60px" }} />
                                        <span>
                                            <div>
                                                <StarIcon /> {v.rating} rating
                                            </div>
                                            <div>
                                                <WorkspacePremiumIcon /> {v.reviews} reviews
                                            </div>
                                            <div>
                                                <GroupIcon /> {v.students} students
                                            </div>
                                            <div>
                                                <PlayCircleIcon /> {v.courses} courses
                                            </div>
                                        </span>
                                    </div>
                                    <div className="single-course-page-main-instructors-data-container-description">{v.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="single-course-page-main-reviews">
                        <h1 className="single-course-page-main-reviews-title">Reviews</h1>
                        <div className="single-course-page-main-reviews-data">
                            {course.reviews.map((v) => (
                                <div className="single-course-page-main-reviews-data-review">
                                    <div className="single-course-page-main-reviews-data-review-avatar">
                                        <Avatar sx={{ margin: "0 auto" }} src={v.image} />
                                    </div>
                                    <div className="single-course-page-main-reviews-data-review-data">
                                        {v.name}

                                        <div className="single-course-page-main-reviews-data-review-head-stars">
                                            <Stars amount={v.rating} size={15} /> {v.time}
                                        </div>
                                        <span className="single-course-page-main-reviews-data-review-text">{v.text}</span>
                                        <span className="single-course-page-main-reviews-data-review-helpful">Was this review helpful? </span>
                                        <div className="single-course-page-main-reviews-data-review-icon-container">
                                            <div className="single-course-page-main-reviews-data-review-icon">
                                                <ThumbUpOutlinedIcon />
                                            </div>
                                            <div className="single-course-page-main-reviews-data-review-icon">
                                                <ThumbDownOutlinedIcon />
                                            </div>
                                            <span>Report</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="single-course-page-side">
                    <div className="single-course-page-side-container2">
                        <Sticky top={20}>
                            <div className="single-course-page-side-container">
                                <div className="single-course-page-side-container-price">$ {course.price} </div>
                                <div className="single-course-page-side-container-price-subtitle"> 1 day left for this course </div>
                                <div className="single-course-page-side-container-cart-button">
                                    <button>Add to cart</button>
                                </div>
                                <div className="single-course-page-side-container-button-button">
                                    <button>Buy Now</button>
                                </div>
                                <span className="single-course-page-side-container-button-button-text">30-day money-back guarantee</span>
                                <div className="single-course-page-side-container-points-title">This course includes: </div>
                                <span className="single-course-page-side-container-points-items"> 2.5 hours on-demand video</span>
                                <span className="single-course-page-side-container-points-items"> 1 article</span>
                                <span className="single-course-page-side-container-points-items"> 1 downloadable resource</span>
                                <span className="single-course-page-side-container-points-items"> Full lifetime access</span>
                                <span className="single-course-page-side-container-points-items"> Access on mobile and TV</span>
                                <span className="single-course-page-side-container-points-items"> Certificate of completion</span>
                                <div className="single-course-page-side-container-actions">
                                    <span className="single-course-page-side-container-actions-item">Share</span>
                                    <span className="single-course-page-side-container-actions-item">Gift this course</span>
                                    <span className="single-course-page-side-container-actions-item">Apply coupon</span>
                                </div>
                            </div>
                        </Sticky>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SingleCoursePage;
