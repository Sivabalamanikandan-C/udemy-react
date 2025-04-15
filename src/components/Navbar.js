import { IoSearch } from "../icons";
import { FaCartShopping } from "../icons";
import { IoMdNotifications } from "../icons";
import { FaUser } from "../icons";
import { IoMenu } from "../icons";

function Navbar() {
    return (<div className="navbar">

        <div className="navbar__s1">
            <h1 className="navbar__s1__title">Udemy</h1>
        </div>

        <div className="navbar__s2">
            <IoSearch />
            <input type="text" placeholder="Search for anything here Tech,Business,Art..."></input>
        </div>

        <div className="navbar__s3">

            <div className="course">
                <p>Courses</p>

                <div className="course__popup">
                    <p>You did not purchased any courses yet</p>
                </div>
            </div>

            <div class="mylearning">
                <p>My Learning</p>

                <div class="mylearning__popup">
                    <p>You did not purchase anything yet</p>
                </div>
            </div>

            <FaCartShopping />
            <IoMdNotifications />
            <FaUser />
        </div>

        <div className="navbar__s4">
            <IoMenu />
        </div>

    </div>);
}

export default Navbar;