import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companylink,
  time,
  address,
  work,
  skills,
  style,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%]"
      style={style}
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companylink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-sm">{work}</p>
        <p className="text-primary dark:text-primaryDark mt-7 font-bold">
          {skills}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light  md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Software Engineer"}
            companylink="https://www.speedlabs.in/"
            company="Speedlabs"
            time={"May 2022 - July 2022"}
            address={"Mumbai, India"}
            work="The project involved building a Psychometry test module and integrating it into an app using REST APIs and Flutter. The module included features such as proctoring, pausing the test, and autosaving the time taken for each question. Additionally, the developer explored Pusher API documentation and integrated it into the Flutter app to create a live chat application. This project demonstrated the developer's proficiency in Flutter, Dart, and REST APIs, as well as their ability to implement complex features and integrate third-party tools. The successful integration of the Psychometry test module and the implementation of various features were notable achievements of the project.The project involved building a Psychometry test module and integrating it into an app using REST APIs and Flutter. The module included features such as proctoring, pausing the test, and autosaving the time taken for each question. Additionally, the developer explored Pusher API documentation and integrated it into the Flutter app to create a live chat application. This project demonstrated the developer's proficiency in Flutter, Dart, and REST APIs, as well as their ability to implement complex features and integrate third-party tools. The successful integration of the Psychometry test module and the implementation of various features were notable achievements of the project."
            skills={
              "Skills: React.js · Express.js · MongoDB · Flutter · Dart · Node.js"
            }
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          />
          <Details
            position={"Software Engineer"}
            companylink="https://egov.org.in/"
            company="Egov Foundation"
            time={"June 2023 - Present"}
            address={"Bangalore, India"}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
