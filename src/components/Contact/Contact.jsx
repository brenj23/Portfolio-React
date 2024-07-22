import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formState, setFormState] = useState({ from_name: '', from_email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (!value) {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formState.from_name || !formState.from_email || !formState.message) {
      setErrors({
        from_name: !formState.from_name ? 'Name is required' : '',
        from_email: !formState.from_email ? 'Email is required' : '',
        message: !formState.message ? 'Message is required' : ''
      });
      return;
    }

    // Send email using EmailJS
    emailjs.sendForm('service_spphbld', 'template_Bren', e.target, 'K5kH7mWpSbJhQd-uv')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        setFormState({ from_name: '', from_email: '', message: '' });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="from_name">Name:</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formState.from_name}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.from_name && <p className="error">{errors.from_name}</p>}
        </div>
        <div>
          <label htmlFor="from_email">Email:</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            value={formState.from_email}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.from_email && <p className="error">{errors.from_email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            onBlur={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
        {submitted && <p className="success">Form submitted successfully!</p>}
      </form>
    </section>
  );
}

export default Contact;
