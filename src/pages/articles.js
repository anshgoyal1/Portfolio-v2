import AnimatedText from "@/components/AnimatedText";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedArticle = ({ title, summary, img, time, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light m-20">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg  inline-block "
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className=" text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark border border-solid border-dark border-b-4 border-r-4 first:mt-0 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-semibold hover:underline">
          {title}{" "}
        </h2>
      </Link>{" "}
      <span className=" text-primary font-semibold pl-20 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Articles </title>
        <meta name="description" content="Aritcles" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <AnimatedText
          text={"Words Can Change The World!"}
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
          <FeaturedArticle
            title="How to Build a Custom Pagination Component in ReactJS"
            summary="In this article, we will build a custom pagination component in ReactJS. We will use the React Hooks API to build this component."
            time={"5 min read"}
            link={"/"}
            img={article1}
          />

          <FeaturedArticle
            title="How to Build a Custom Pagination Component in ReactJS"
            summary="In this article, we will build a custom pagination component in ReactJS. We will use the React Hooks API to build this component."
            time={"5 min read"}
            link={"/"}
            img={article1}
          />
        </ul>
        <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 ">
          All Articles
        </h2>
        <ul>
          <Article
            title={"How to Build a Custom Pagination Component in ReactJS"}
            date={"5/12/2001"}
            link={"/"}
            img={article1}
          />
          <Article
            title={"How to Build a Custom Pagination Component in ReactJS"}
            date={"5/12/2001"}
            link={"/"}
            img={article1}
          />
          <Article
            title={"How to Build a Custom Pagination Component in ReactJS"}
            date={"5/12/2001"}
            link={"/"}
            img={article1}
          />
          <Article
            title={"How to Build a Custom Pagination Component in ReactJS"}
            date={"5/12/2001"}
            link={"/"}
            img={article1}
          />
          <Article
            title={"How to Build a Custom Pagination Component in ReactJS"}
            date={"5/12/2001"}
            link={"/"}
            img={article1}
          />
          <Article
            title={"How to Build a Custom Pagination Component in ReactJS"}
            date={"5/12/2001"}
            link={"/"}
            img={article1}
          />
        </ul>
      </main>
    </>
  );
};

export default articles;
