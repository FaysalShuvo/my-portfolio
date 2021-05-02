import React from "react";
import emailjs from "emailjs-com";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillCaretDown,
} from "react-icons/ai";
import { ExternalLink } from "react-external-link/dist/index.cjs";

const AboutMe = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o5w75jo",
        "template_g441k89",
        e.target,
        "user_9SBafFxo1efxllHDRhjMf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className="text-center">
        <h1 style={{ fontFamily: "Montserrat", fontWeight: "900" }}>
          SEND ME A MESSAGE
        </h1>
      </div>
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="4"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="btn btn-info"
              value="Send Message"
            ></input>
          </div>
        </div>
      </form>

      <div className="text-center pb-5">
        <p style={{ fontFamily: "Montserrat" }}>
          or find me in <AiFillCaretDown />
        </p>
        <ExternalLink href="https://www.linkedin.com/in/md-faysal-islam-shuvo/">
          <AiFillLinkedin
            className="mr-2"
            style={{ fontSize: "30px", color: "white" }}
          />
        </ExternalLink>
        <ExternalLink href="https://github.com/FaysalShuvo">
          <AiFillGithub
            className="mr-2"
            style={{ fontSize: "30px", color: "white" }}
          />
        </ExternalLink>
        <ExternalLink href="https://github.com/FaysalShuvo">
          <AiFillFacebook
            className="mr-2 "
            style={{ fontSize: "30px", color: "white" }}
          />
        </ExternalLink>
      </div>
    </>
  );
};

export default AboutMe;
