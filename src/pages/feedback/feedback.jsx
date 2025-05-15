import React, { useState } from "react";
import './feedback.css';
import { auth } from "../../firebase";
import { addFeedback } from "../../lib/db";

function App() {
  // State to store form input
  const [formData, setFormData] = useState({
    message: "",
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const currentUser = auth.currentUser;
    if (!currentUser) {
      alert("You must be signed in to provide feedback!")
      return;
    }

    setSubmittedData(formData); // Save submitted data
    addFeedback(currentUser.uid, submittedData.name)
  };

  return (
    <>
      <div className="bodyText">
        <h1>Enter your feedback here!</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Message:{" "}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your feedback"
                required
              />
            </label>
          </div>
          <button type="submit" style={{ padding: "5px 10px" }}>
            Submit
          </button>
        </form>

        {submittedData && (
          <div style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h2>Submitted Data:</h2>
            <p><strong>Feedback:</strong> {submittedData.name}</p>
            <p><strong>Thank you!</strong></p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;