import AnimatedText from "@/components/AnimatedText";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import stateManagement from "../../public/images/articles/stateManagement.webp";
import pythonFacebook from "../../public/images/articles/pythonFacebook.webp";
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
            title="Google’s Recommended Flutter State Management"
            summary="In this Article We Will Talk about what Google recommends for state management; well, it’s not! And what makes it complicated is not the community choices but the fact that we are implementing a workaround for not having true Full-MVVM. Thus, it’s still wrapped up in what the MVC pattern does well and not well and how to fix it, and how to dependency inject things."
            time={"6 min read"}
            link={
              "https://faun.pub/googles-recommended-flutter-state-management-ed25712dfc66"
            }
            img={stateManagement}
          />

          <FeaturedArticle
            title="Python Script to Download Facebook Videos"
            summary="In this tutorial, we are going to see the Method to Download Facebook Videos using Python3."
            time={"4 min read"}
            link={
              "https://python.plainenglish.io/python-script-to-download-facebook-videos-dc2e2d1c6df6"
            }
            img={pythonFacebook}
          />
        </ul>
        <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 ">
          All Articles
        </h2>
        <ul>
          <Article
            title={
              "en mind-blowing AI websites you probably didn’t know existed."
            }
            date={"Aug 15, 2022"}
            link={
              "https://faun.pub/ten-mind-blowing-ai-websites-you-probably-didnt-know-existed-3eb2ac7a9110"
            }
          />
          <Article
            title={"The Only Lists You Need For Your Interview Preparation"}
            date={"Aug 9, 2022"}
            link={
              "https://faun.pub/the-only-lists-you-need-for-your-interview-preparation-780d972c030a"
            }
          />
          <Article
            title={"Roadmap to becoming a Flutter developer."}
            date={"Aug 7, 2022"}
            link={
              "https://anshgoyal749.medium.com/roadmap-to-becoming-a-flutter-developer-46431853145b?source=user_profile---------2----------------------------"
            }
          />
          <Article
            title={"Master Dynamic Programming With Patterns"}
            date={"Aug 24, 2022"}
            link={
              "https://anshgoyal749.medium.com/master-dynamic-programming-with-patterns-b25f1fb1297c?source=user_profile---------5----------------------------"
            }
          />
          <Article
            title={
              "How to write a Bash script from Windows without having Linux installed"
            }
            date={"Aug 22, 2022"}
            link={
              "https://anshgoyal749.medium.com/how-to-write-a-bash-script-from-windows-without-having-linux-installed-61a9646a8594?source=user_profile---------6----------------------------"
            }
          />
          <Article
            title={"A Developer’s Guide to Flutter"}
            date={"Aug 20, 2022"}
            link={
              "https://anshgoyal749.medium.com/a-developers-guide-to-flutter-330f2eba0118?source=user_profile---------7----------------------------"
            }
          />
          <Article
            title={"10 Chrome Extensions To Boost Productivity By 269%"}
            date={"Jul 10, 2022"}
            link={
              "https://anshgoyal749.medium.com/10-chrome-extensions-to-boost-productivity-by-269-89bf78eeeae7?source=user_profile---------8----------------------------"
            }
          />
          <Article
            title={"Pusher Docs for creating real time Messaging with Flutter"}
            date={"Jun 1, 2022"}
            link={
              "https://anshgoyal749.medium.com/pusher-docs-for-creating-real-time-messaging-with-flutter-363df86c78d2?source=user_profile---------9----------------------------"
            }
          />
        </ul>
      </main>
    </>
  );
};

export default articles;
