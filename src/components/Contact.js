import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import './css/Contact.css';

const Contact = () => {

    const [values, setValues] = useState({message1: "",});
    const [validate, setValidate] = useState({message1: "",});

    function handleChange(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    const checkValidation = () => {
        let errors = validate;
        let message = document.getElementById('message1');

        if (message.value == "") {
            errors.message1 = "Please enter a message";
        } else {
            errors.message1 = "";
        }

        setValidate(errors);
    }

    useEffect(() => {
        checkValidation();
    }, [values]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="container">
                <header>
                    <h3>Contact Me</h3>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <form method="post" action="/" onSubmit={handleSubmit}>
                    <div className="name-row">
                        <div className="fname">
                            <label htmlFor="first_name">First name</label>
                            <br />
                            <input type="text" name="first_name" id="first_name" placeholder="Enter your first name" />
                        </div>
                        <div className="lname">
                            <label htmlFor="last" id="lname">Last name</label>
                            <br />
                            <input type="text" name="last" id="last_name" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" id="email" name="email" placeholder="yourname@email.com" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <br />
                        <textarea onChange={(e) => handleChange(e)} value={values.message1} id="message1" name="message1" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                        {validate.message1 && <p className="errors">{validate.message1}</p>}
                    </div>
                    <div className="agreement">
                        <input type="checkbox" />
                        You agree to providing your data to who may contact you.
                    </div>
                    <div>
                        <input type="submit" id="btn__submit" value="Send message" />
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Contact;