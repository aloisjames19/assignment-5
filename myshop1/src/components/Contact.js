import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <p>Call :+263 716 011 222 / +263 782 681 980</p>
      <p>Email address : jetelectrical@gamil.com</p>
      <address>1176 Chaminuka  Street</address>
      <address>Chipadze , Bindura</address>
      <address>Zimbabwe</address>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;