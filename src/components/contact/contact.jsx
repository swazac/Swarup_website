import React from 'react'
import './contact.css'
import {SiGmail} from "react-icons/si";
import {FaFacebookMessenger} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'

const Contact = () => {
  return (
    <section id="contact">
      <h3>Get in touch</h3>
      <h2>Contact me</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <SiGmail className="contact__option-icon gmail" />
            <h3>Email</h3>
            <a
              href="mailto:swarup.zac@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send me a message
            </a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className="contact__option-icon fb" />
            <h3>Facebook Messenger</h3>
            <a
              href="https://m.me/swarup.zachariah"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send me a message
            </a>
          </article>
          <article className="contact_option">
            <ImWhatsapp className="contact__option-icon whatsapp" />
            <h3>Whatsapp</h3>
            <a
              href="https://wa.me/13434631040"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send me a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact