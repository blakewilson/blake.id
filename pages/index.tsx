import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />

      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <Image
              className="rounded-lg"
              src="/profile-pic.png"
              width={2607}
              height={3463}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 prose prose-lg md:prose-2xl dark:prose-invert">
            <h2>Hi, I'm Blake.</h2>

            <p className="text-3xl">
              I&apos;m a software engineer and creator, building things for the
              web.
            </p>

            <p>
              Focused on TypeScript, React, GraphQL, Next.js, and WordPress.
              Currently, I'm working at WP Engine building{" "}
              <a href="https://github.com/wpengine/faustjs">
                Headless WordPress
              </a>{" "}
              solutions.
            </p>

            <p>
              I make{" "}
              <a href="https://github.com/blakewilson">open source software</a>,
              and{" "}
              <Link href="/posts">
                <a>write about it.</a>
              </Link>{" "}
              Here are some of my favorites:
            </p>

            <ul>
              <li>
                <Link href="/unsent-project-boosting-conversions-4x-with-react/">
                  The Unsent Project: Boosting Conversions 4x With React
                </Link>
              </li>
              <li>
                <Link href="/v2-of-vidbg-is-now-released/">
                  Version 2 of vidbg.js Has Been Released
                </Link>
              </li>
              <li>
                <Link href="/react-global-state-in-5-minutes-with-hooks-usecontext-usereducer/">
                  React Global State in 5 Minutes with Hooks (useContext,
                  useReducer)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
