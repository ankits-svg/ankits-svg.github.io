import React from "react";
import "./Introduction.css";


import profilePic from "../Assest/ankit.jpg";
import { MdExitToApp } from "react-icons/md";


export const Introduction = () => {
  // const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction "}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Ankit Sharma </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Gorakhpur, Utttar Pradesh (India)
                </span>
                . I have completed my graduation in BTech (Mechanical Engineering)
                from{" "}
                <span className="different">
                  Pranveer Singh Institue Of Technology, kanpur (UP)
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <MdExitToApp />
                </span>
                Book Reader{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                <MdExitToApp />
                </span>
                Chess Enthusiast{" "}
              </h4>
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
