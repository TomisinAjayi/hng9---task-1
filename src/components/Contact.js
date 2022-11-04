import React from "react";
import Footer from "./Footer";
import './css/Links.css';

const Contact = () => {
    return (
        <>
            <div className="container">
                <header>
                    <h3>Contact Me</h3>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <form method="POST" action="">
                    <div className="name-row">
                        <div className="fname">
                            <label htmlFor="first_name">First name</label>
                            <br />
                            <input type="text" name="first_name" id="first_name" placeholder="Enter your first name" required />
                        </div>
                        <div className="lname">
                            <label htmlFor="last">Last name</label>
                            <br />
                            <input type="text" name="last" id="last_name" placeholder="Enter your last name" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" id="email" name="email" placeholder="yourname@email.com" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <br />
                        <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
                    </div>
                    <div>
                        <input type="checkbox" />
                        You agree to providing your data to who may contact you.
                    </div>
                    <button id="btn__submit">
                        Send message
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Contact;