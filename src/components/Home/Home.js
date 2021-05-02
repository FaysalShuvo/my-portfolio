import React from "react";
import "./Home.css";
import profile from "../../images/profile.jpg";
import Typical from "react-typical";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillCaretDown,
} from "react-icons/ai";
import { ExternalLink } from "react-external-link";
const Home = () => {
  return (
    <div className="home-body d-flex justify-content-center align-items-center">
      {" "}
     
      <div className="row ">
        <div className="col-md-4 d-flex justify-content-center align-items-center home-img">
          <img className="shape" src={profile} alt="faysal islam Shuvo" />
        </div>
        <div className="col-md-8 home-text ">
          <h1 style={{ fontWeight: "900" }}>
            <Typical
              steps={[1000, " MD. FAYSAL ISLAM SHUVO", 500]}
              loop={Infinity}
              wrapper="p"
            />
          </h1>
          <p>
            I'm a full-stack web developer. I’ve built a few projects by myself
            and I’m looking for a role where I can grow and learn from other
            experienced team members also i am Powered by VS CODE and coffee.
            <span className="mt-5" style={{ display: "block" }}>
              <ExternalLink href="https://drive.google.com/uc?export=download&id=1IkrA6HyfqGUTlI2iVz9-5uZC0QBpVLpx">
                DOWNLOAD MY RESUME
              </ExternalLink>
            </span>
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
              className="mr-2"
              style={{ fontSize: "30px", color: "white" }}
            />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
