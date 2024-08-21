import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const Footer2 = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs.send('service_1tkoie2', 'template_ywdxixr', formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsFormVisible(false); // Hide the form after successful submission
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      }, (err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <div>
      {/* Existing footer code */}
      <div style={{ height: "30vh", marginTop: "100px", backgroundColor: "lightgreen", display: "flex", gap: '50px', justifyContent: "center" }}>
        <a href="">Home</a>
        <a href="about">about</a>
        <p>pujarisaidattu6@gmail.com</p>
        <p>+91 6281784345</p>
      </div>
      {/* Fixed Contact Button */}
      <button
        onClick={toggleForm}
        style={fixedButtonStyle}
      >
        Contact me
      </button>
      {/* Form modal */}
      {isFormVisible && (
        <div style={modalStyle}>
          <div style={formStyle}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <textarea
                name="message"
                placeholder="Enter your message here"
                value={formData.message}
                onChange={handleChange}
                style={{ ...inputStyle, height: "100px" }}
                required
              ></textarea>
              <button type="submit" style={submitButtonStyle}>Submit</button>
            </form>
            <button onClick={toggleForm} style={closeButtonStyle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const formStyle = {
  backgroundColor: "wheat",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  textAlign: "center",
};

const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const submitButtonStyle = {
  padding: "10px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const closeButtonStyle = {
  marginTop: "10px",
  padding: "10px",
  backgroundColor: "red",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const fixedButtonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  padding: "15px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  zIndex: 1000,
};

export default Footer2;