import one from "../assets/images/computeone.jpg";
import two from "../assets/images/compute.jpg";
import three from "../assets/images/computer.jpg";
import four from "../assets/images/udecomp.jpg";

import { FaIndianRupeeSign } from "../icons";

function Recommended() {
    return (<div className="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>

        <div className="recommended-container">
            <div className="course-card">
                <img src={one} alt="Web Development"></img>
                <h3 className="course-card__title">The Web Development</h3>
                <p className="course-card__author">Colt steele</p>
                <p className="course-card__ratings">4.6 ⭐⭐⭐⭐ (2,73,247)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />549 <del>
                    <FaIndianRupeeSign />2499</del></p>
                <button className="course-card__btn">Bestseller</button>
            </div>

            <div className="course-card">
                <img src={two} alt="Web Development"></img>
                <h3 className="course-card__title">The complete 2024 PHP</h3>
                <p className="course-card__author">Srini vanamala</p>
                <p className="course-card__ratings">4.6 ⭐⭐⭐ (5,334)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />999 <del>
                    <FaIndianRupeeSign />6,500</del></p>
                <button className="course-card__btn">Bestseller</button>
            </div>

            <div className="course-card">
                <img src={three} alt="Web Development"></img>
                <h3 className="course-card__title">The complete Javascript</h3>
                <p className="course-card__author">Jonas Schmedtmann</p>
                <p className="course-card__ratings">4.6 ⭐⭐⭐⭐ (2,73,247)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />549 <del>
                    <FaIndianRupeeSign />2499</del></p>
                <button className="course-card__btn">Bestseller</button>
            </div>

            <div className="course-card">
                <img src={four} alt="Web Development"></img>
                <h3 className="course-card__title">Angular complete guide</h3>
                <p className="course-card__author">Schwarzmüller</p>
                <p className="course-card__ratings">4.6 ⭐⭐⭐⭐ (202,207)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />549 <del>
                    <FaIndianRupeeSign />2499</del></p>
                <button className="course-card__btn">Bestseller</button>
            </div>
        </div>
    </div>);
}

export default Recommended;