import saleimg from "../assets/images/saleimg.jpeg";

function Sale() {
    return (<div className="sale-image">
        <img src={saleimg} alt="Sale image"></img>

        <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save</h2>
            <p>Get the top courses for just 449. Just one day to save but a lifetime to learn</p>
        </div>
    </div>);
}

export default Sale;