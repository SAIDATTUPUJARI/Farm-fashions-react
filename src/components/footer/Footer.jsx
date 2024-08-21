import loctionpin from "../assets2/footer/loctionpin.png";
import email from "../assets2/footer/email.png";
import phone from "../assets2/footer/phone.png";

const Footer = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "200px" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "100px", gap: "20px" }}>
                    <button style={{ backgroundColor: "green" }}>
                        <img src={loctionpin} alt="locationpin" style={{ width: "50px" }} />
                    </button>
                    <h5 style={{ textAlign: "center" }}>Location</h5>
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "100px", gap: "20px" }}>
                    <button style={{ backgroundColor: "green" }}>
                        <img src={email} alt="Email" style={{ width: "50px" }} />
                    </button>
                    <h5 style={{ textAlign: "center" }}>Email</h5>
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "100px", gap: "20px" }}>
                    <button style={{ backgroundColor: "green" }}>
                        <img src={phone} alt="phone" style={{ width: "50px" }} />
                    </button>
                    <h5 style={{ textAlign: "center" }}>Phone</h5>
                </div>
            </div>
            <div className="maplocation" style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                <iframe
                    title="Ananthapur Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244134.89257085006!2d77.4983479492828!3d14.685721683354824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3d6a72cdbcc69%3A0xc45b1b7e9cfc72de!2sAnantapuram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1620249650530!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px", display:"flex", justifyContent:"center"}}>
            <button style={{backgroundColor:"green"}}>Learn more</button>
            </div>
        </div>
    );
};

export default Footer;
