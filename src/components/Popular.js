import popularone from "../assets/images/popularcourse.jpg";
import populartwo from "../assets/images/popularcoursetwo.jpg";
import popularthree from "../assets/images/popularcoursethree.jpg";
import popularfour from "../assets/images/popularcoursefour.jpg";

import { FaIndianRupeeSign } from "../icons";

function Popular() {
    return (<div className="popular">
        <h1 className="Popular__title">Most Popular</h1>
        <p>Pick the best fit</p>

        <div className="popular-container">
            <div className="popular-course">
                <img src={popularone} alt="Popular Course"></img>
                <h3 className="popular-course__title">[NEW] Ultimate AWS Certified Cloud Course</h3>
                <p className="popular-course__author">Stephane Maarek</p>
                <p className="popular-course__ratings">4.7 ⭐⭐⭐⭐ (208,883)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />549 <del><FaIndianRupeeSign />3,549</del></p>
                <button>Bestseller</button>
            </div>

            <div className="popular-course">
                <img src={populartwo} alt="Popular Course"></img>
                <h3 className="popular-course__title">React - The Complete Guide 2024 (Next.js)</h3>
                <p className="popular-course__author">Maximilian Schwarzmüller</p>
                <p className="popular-course__ratings">4 ⭐⭐⭐⭐ (2,12,837)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />599 <del><FaIndianRupeeSign />3,599</del></p>
                <button>Bestseller</button>
            </div>

            <div className="popular-course">
                <img src={popularthree} alt="Popular Course"></img>
                <h3 className="popular-course__title">Java Masterclass: 2024</h3>
                <p className="popular-course__author">Tim Buchalka</p>
                <p className="popular-course__ratings">4.5 ⭐⭐⭐⭐ (1,97,596)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />648 <del><FaIndianRupeeSign />4,549</del></p>
                <button>Bestseller</button>
            </div>

            <div className="popular-course">
                <img src={popularfour} alt="Popular Course"></img>
                <h3 className="popular-course__title">DevOps Beginners to Advanced </h3>
                <p className="popular-course__author">Imran Teli</p>
                <p className="popular-course__ratings">3 ⭐⭐⭐ (29,577)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />549 <del><FaIndianRupeeSign />3,499</del></p>
                <button>Bestseller</button>
            </div>

            <div className="popular-course">
                <img src={populartwo} alt="Popular Course"></img>
                <h3 className="popular-course__title">React - The Complete Guide 2024 (Next.js)</h3>
                <p className="popular-course__author">Maximilian Schwarzmüller</p>
                <p className="popular-course__ratings">4.2 ⭐⭐⭐⭐ (2,12,837)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />599 <del><FaIndianRupeeSign />3,599</del></p>
                <button>Bestseller</button>
            </div>

            <div className="popular-course">
                <img src={popularfour} alt="Popular Course"></img>
                <h3 className="popular-course__title">DevOps Beginners to Advanced</h3>
                <p className="popular-course__author">Imran Teli</p>
                <p className="popular-course__ratings">3.2 ⭐⭐⭐ (29,577)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />549 <del><FaIndianRupeeSign />3,499</del></p>
                <button>Bestseller</button>
            </div>

            <div className="popular-course">
                <img src={popularone} alt="Popular Course"></img>
                <h3 className="popular-course__title">Ultimate AWS Certified Cloud Practitioner</h3>
                <p className="popular-course__author">Stephane Maarek</p>
                <p className="popular-course__ratings">4.6 ⭐⭐⭐⭐ (208,883)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />549 <del><FaIndianRupeeSign />3,549</del></p>
                <button>Bestseller</button>
            </div>

            <div className="popular-course">
                <img src={popularthree} alt="Popular Course"></img>
                <h3 className="popular-course__title">Java 24 Masterclass: in 2024</h3>
                <p className="popular-course__author">Tim Buchalka</p>
                <p className="popular-course__ratings">4.9 ⭐⭐⭐⭐⭐ (1,97,596)</p>
                <p className="popular-course__price"><FaIndianRupeeSign />649 <del><FaIndianRupeeSign />4,549</del></p>
                <button>Bestseller</button>
            </div>
        </div>
    </div>);
}

export default Popular;