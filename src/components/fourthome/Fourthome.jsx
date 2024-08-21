import Greenshoe from "../assets2/fourthhomeimg/greenshoes.png";
import "../fourthome/Fourthome.css";
import shoes1 from "../assets2/fourthhomeimg/shoes1.png";
import shoes2 from "../assets2/fourthhomeimg/shoes2.png";
import shoes3 from "../assets2/fourthhomeimg/shoes3.png";
import shoes4 from "../assets2/fourthhomeimg/shoes4.png";
import shoes5 from "../assets2/fourthhomeimg/shoes5.png";
import shoes6 from "../assets2/fourthhomeimg/shoes6.png";

const Fourthome = () => {
    return (
        <div className="fourth_cards">
            <div className="heading">
                <h2>Best Sellers</h2>
                <p>Shoes</p>
            </div>
            <div className="allshoes" style={{display:'flex'}}>
            <div style={{ height: "400px", width: "320px", paddingTop: "20px" }}>
                <button style={{marginLeft:"25px", marginBottom:"30px"}}>
                    <img src={Greenshoe} alt="greenshoe" style={{ height: "400px", width: "auto" }} />
                </button>
            </div>
            
            <div style={{marginLeft:"150px",display:"flex",flexDirection:"column",gap:"100px"}}>
                <div className="3_shoes" style={{display:"flex", gap:"200px"}}>
                <div className="shoes">
                    <button>
                        <img src={shoes1} alt="shoes1" />
                    </button>
                    <h4 style={{textAlign:"center"}}>999/-</h4>
                </div>
                <div className="shoes">
                    <button>
                        <img src={shoes2} alt="shoes2" />
                    </button>
                    <h4 style={{textAlign:"center"}}>1999/-</h4>
                </div>
                <div className="shoes">
                    <button>
                        <img src={shoes3} alt="shoes3" />
                    </button>
                    <h4 style={{textAlign:"center"}}>999/-</h4>
                </div>
                </div>
                <div className="3_1_shoes"  style={{display:"flex",flexDirection:"row",gap:"200px"}}>
                <div className="shoes">
                    <button>
                        <img src={shoes4} alt="shoes4" />
                    </button>
                    <h4 style={{textAlign:"center"}}>899/-</h4>
                </div>
                <div className="shoes">
                    <button>
                        <img src={shoes5} alt="shoes5" />
                    </button>
                    <h4 style={{textAlign:"center"}}>799/-</h4>
                </div>
                <div className="shoes">
                    <button>
                        <img src={shoes6} alt="shoes6" />
                    </button>
                    <h4 style={{textAlign:"center"}}>1999/-</h4>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Fourthome;
