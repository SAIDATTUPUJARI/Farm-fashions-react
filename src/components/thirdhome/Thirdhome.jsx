import "../thirdhome/Thirdhome.css";
import hatmen from "../assets2/thirdhome/hatmen.png";
import hats from "../assets2/thirdhome/hats.png"
import hats1 from "../assets2/thirdhome/hats1.png"

const Thirdhome = () => {
  return (
    <div className="cardsmain" style={{marginTop:"100px"}}>
    <div className="cards">
      <div className="card1_2">
        <div className="card1">
          <h2 style={{textAlign:"center"}}>
            For →<br /> EVERYONE BUT NOT ANYONE
          </h2>
          <footer>
            <p style={{textAlign:"center"}}>
              We establish personal relationships with our boutiques to make
              sure each is catered for a stress-free shopping experience.
            </p>
          </footer>
        </div>
        <div className="card1_3">
        <div className="card2" style={{ position: 'relative', display: 'inline-block',margin:"2px" }}>
          <button style={{ padding: 0, border: 'none', background: 'transparent' }}>
            <img src={hatmen} style={{ width: '150px', height: '150px' }} alt="Hat" />
          </button>
          <h2 style={{
            position: 'absolute',
            paddingTop:"110px",
            paddingRight:"50px",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'gray',
            fontSize: '20px',
            margin: 0,
            pointerEvents: 'none'
          }}>
            #RIPSTOP
          </h2>
          </div>
          <div className="card3" style={{ position: 'relative', display: 'inline-block' }}>
          <button style={{ padding: 0, border: 'none', background: 'transparent' }}>
            <img src={hats} style={{ width: '150px', height: '150px' }} alt="Hat" />
          </button>
          <h2 style={{
            position: 'absolute',
            paddingTop:"110px",
            paddingRight:"50px",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'gray',
            fontSize: '20px',
            margin: 0,
            pointerEvents: 'none'
          }}>
            #INSULATED
          </h2>
          </div>
      </div>
      </div>
      <div className="card4" style={{height:"350px", paddingLeft:"10px", paddingTop:"170px"}}><button style={{height:"50px", paddingBottom:"150px"}}><img src={hats1} alt="hats" style={{height:"350px"}}></img></button></div>
    </div>
    <div className="quote">
      <h3 style={{textAlign:"center", paddingTop:"100px",}}>
      Shopping should be a journey,🛍️ not a chore. Discover curated excellence with *every click, and experience personalized service that turns transactions into relationships
      </h3>
    </div>
    </div>
  );
}

export default Thirdhome;
