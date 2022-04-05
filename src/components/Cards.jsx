import "./Style.css";
import Venom from "../assets/elena-mozhvilo-q2ka_v4RXBQ-unsplash.jpg";
import Hulk from "../assets/pexels-amusan-6732346.jpg";
import Marvel from "../assets/pexels-anna-shvets-5325630.jpg";

const cards = () => {
  return (
    <div className="cards">
        <img className="images" src={Venom} alt="" />
        <img className="images" src={Hulk} alt="" />
        <img className="images" src={Marvel} alt="" />
    </div>
  )
}

export default cards