// Question: Contact form with correct CSS classes (FINAL UI FIX)

import React, { useState } from 'react';
import API from '../api/api';
import './Contact.css';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [resMessage, setResMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      await API.post('/contact', formData);

      setStatus('success');
      setResMessage("Message sent successfully!");

      setFormData({ name: '', email: '', message: '' });

    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="container">

        <div className="contact-layout">

          {/* LEFT SIDE INFO */}
          <div>
            <h3 className="contact-info-title">Get in touch</h3>
            <p className="contact-info-desc">
              Feel free to contact me anytime.
            </p>

            <div className="contact-info-item">
              <span className="contact-info-icon">📧</span>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">mahesh@example.com</div>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">📍</span>
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-value">Pune, Maharashtra</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form-wrapper">

            <h3 className="form-title">Send a message</h3>

            {status === 'error' && (
              <div className="form-error-banner">
                ⚠️ Something went wrong. Please try again.
              </div>
            )}

            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>{resMessage}</p>
              </div>
            ) : (

              <form onSubmit={handleSubmit}>

                {/* NAME */}
                <div className="form-group">
                  <label className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                {/* MESSAGE */}
                <div className="form-group">
                  <label className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    name="message"
                    className="form-input form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                {/* BUTTON */}
                <button type="submit" className="form-submit btn">
                  {status === 'loading' ? <span className="spinner"></span> : "Send Message"}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;