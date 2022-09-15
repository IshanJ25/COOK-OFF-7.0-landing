/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";

import logo from "./../assets/images/imgHolder.png";

import youtube from "./../assets/icons/youtube.svg";
import instagram from "./../assets/icons/instagram.svg";
import linkedin from "./../assets/icons/linkedin.svg";
import medium from "./../assets/icons/medium.svg";
import twitter from "./../assets/icons/twitter.svg";
import github from "./../assets/icons/github.svg";

const containerVarients = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const HowReg = () => {
  return (
    <motion.div
      className="base container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div>
        <div className="flex-col flex md:flex-row lg:flex-row items-center">
          <a href="/">
            <img
              src="https://www.codechefvit.com/Images/codechef_logo_1.svg"
              alt="codechef"
              className="block"
            />
          </a>
          <h1 className="py-5 font-bold text-[#8CB411] font-mudclaw lg:ml-32">
            Got Questions? Get in touch
          </h1>
        </div>
        <div className="hidden py-12 mx-56 md:inline-block lg:inline-block">
          <img src={logo} alt="codechefLogo" className="w-52 inline pb-5" />
          <p className="text-2xl max-w-xl text-center font-face-ibm font-ibm">
            Cook Off 7.0 will test your speed, ability and knowledge. You will
            also get a chance to compete with some of the best coders on a
            global platform.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="py-12 lg:mx-10 md:hidden lg:hidden">
            <img src={logo} alt="codechefLogo" className="w-52 inline pb-5" />
            <p className="text-2xl max-w-xl font-ibm">
              Cook Off 7.0 will test your speed, ability and knowledge. You will
              also get a chance to compete with some of the best coders on a
              global platform.
            </p>
          </div>
          <div className="py-12">
            <h1 className="py-5 font-bold text-[#8CB411] font-ibm">Contact</h1>
            <p className="text-2xl font-ibm">Thaman (Chairperson)</p>
            <p className="text-2xl font-ibm">Phone: +91-9880093000</p>
            <p className="text-2xl font-ibm">Email: codechefvit@gmail.com</p>
          </div>
          <div className="py-12 md:pl-32 lg:pl-[20rem]">
            <h1 className="py-5 font-bold text-[#8CB411] font-ibm">
              Follow Us
            </h1>
            <div className="flex flex-row justify-center items-center">
              <a href="https://medium.com/codechef-vit" target="_blank">
                <img src={medium} className="pr-4" />
              </a>
              <a href="https://twitter.com/codechefvit" target="_blank">
                <img src={twitter} className=" pr-4" />
              </a>
              <a href="https://youtube.com/codechef-vit" target="_blank">
                <img src={youtube} className="pr-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/codechef-vit-chapter"
                target="_blank"
              >
                <img src={linkedin} className=" pr-4" />
              </a>
              <a href="https://instagram.com/codechefvit" target="_blank">
                <img src={instagram} className="pr-4" />
              </a>
              <a href="https://github.com/CodeChefVIT" target="_blank">
                <img src={github} className=" lg pr-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-6 justify-between ">
        <Link to="/how-to-register">
          <Button content={"How to register and FAQs"} />
        </Link>
        <Link to="/">
          <Button content={"Home"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default HowReg;
