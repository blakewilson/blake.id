import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import SEO from "../components/seo";
import profilePic from "../public/profile-pic.jpeg";

export default function Home() {
  return (
    <>
      <SEO
        title="Blake Wilson - Software Engineer and Creator"
        description="Hey I'm Blake! I'm a software engineer and creator, building things for the web."
      />
      <Header />

      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="relative w-full md:w-1/2 p-4">
            <Image
              src={profilePic}
              alt="A picture of me sitting at a rooftop bar"
              width={2079}
              height={2910}
              placeholder="blur"
              className="shadow-lg rounded-lg"
            />
            <div className="relative md:absolute text-lg my-2">
              📍 Based in Austin, TX
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 prose prose-lg md:prose-2xl dark:prose-invert">
            <h2>Hi, I'm Blake.</h2>

            <p className="text-3xl">
              I&apos;m a software engineer and creator, building things for the
              web.
            </p>

            <p>
              My focus is on TypeScript, React, GraphQL, Next.js, and WordPress.
              I'm currently working at WP Engine, building a{" "}
              <a href="#">frontend JavaScript framework</a> for Headless
              WordPress.
            </p>

            <p>
              I make{" "}
              <a href="https://github.com/blakewilson">open source software</a>,
              and <Link href="/posts">write about it.</Link> Here are some of my
              favorite posts:
            </p>

            <ul>
              <li>
                <Link href="/unsent-project-boosting-conversions-4x-with-react/">
                  The Unsent Project: Boosting Conversions 4x With React
                </Link>
              </li>
              <li>
                <Link href="/react-global-state-in-5-minutes-with-hooks-usecontext-usereducer/">
                  React Global State in 5 Minutes with Hooks (useContext,
                  useReducer)
                </Link>
              </li>
              <li>
                <Link href="/v2-of-vidbg-is-now-released/">
                  Version 2 of vidbg.js Has Been Released
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
