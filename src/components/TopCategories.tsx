import React, { useState } from "react";
import "./TopCategories.css";

interface props {}

const TopCategories: React.FC<props> = ({}) => {
    return (
        <section className="top-categories-section">
            <span className="top-categories-head">Top categories</span>
            <div className="top-categories-container container">
                <div className="top-categories-category col-sm-12 col-md-4 col-lg-3">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                    <span>Design</span>
                </div>
                <div className="top-categories-category col-sm-12 col-md-4 col-lg-3">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
                    <span>Development</span>
                </div>
                <div className="top-categories-category col-sm-12 col-md-4 col-lg-3">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" />
                    <span>Marketing</span>
                </div>
                <div className="top-categories-category col-sm-12 col-md-4 col-lg-3">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" />
                    <span>IT and Software</span>
                </div>
                <div className="top-categories-category col-sm-12 col-md-4 col-lg-3">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" />
                    <span>Personal Development</span>
                </div>
                <div className="top-categories-category col-sm-12 col-md-4 col-lg-3">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" />
                    <span>Business</span>
                </div>
                <div className="top-categories-category col-sm-12 col-md-4 col-lg-3">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" />
                    <span>Photography</span>
                </div>
                <div className="top-categories-category col-sm-12 col-md-4 col-lg-3">
                    <img src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" />
                    <span>Music</span>
                </div>
            </div>
        </section>
    );
};

export default TopCategories;
