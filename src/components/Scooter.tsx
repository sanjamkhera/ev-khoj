import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or need further information, please contact us:</p>
      <ul>
        <li>Phone: [Your business phone number]</li>
        <li>Email: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></li>
        {/* If you have a physical location: */}
        <li>Address: [Your business address]</li>
      </ul>
      <section>
        <h2>Send Us a Message</h2>
        <form>
          {/* A simple contact form */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
