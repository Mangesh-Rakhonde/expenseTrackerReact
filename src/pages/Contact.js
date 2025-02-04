import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null); // Success or Error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission (can be replaced with an actual API call)
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } else {
      setFormStatus('Please fill in all fields.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📞 Contact Us</h2>

      <div className="card p-4 shadow-sm">
        <h4>We'd love to hear from you!</h4>
        <p>If you have any questions, feedback, or issues, please get in touch with us.</p>

        {formStatus && (
          <div className={`alert ${formStatus.includes('success') ? 'alert-success' : 'alert-danger'}`} role="alert">
            {formStatus}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
