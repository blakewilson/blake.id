import Link from "next/link";
import { BsGithub, BsTiktok, BsTwitterX, BsX, BsYoutube } from "react-icons/bs";
import { FaNpm, FaTiktok } from "react-icons/fa";

export default function Header() {
  return (
    <header className="mb-8">
      <div className="w-full max-w-6xl p-4 mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <Link className="mb-6 sm:mb-0" href="/">
          <div className="text-3xl font-bold">Blake Wilson</div>
          <div className="text-md">Software Engineer</div>
        </Link>

        <ul className="w-full md:w-auto overflow-x-auto md:overflow-x-visible flex items-center">
          <li className="mr-6">
            <Link className="text-lg text-black dark:text-white" href="/posts">
              Posts
            </Link>
          </li>
          <li className="mr-6">
            <Link
              className="text-lg text-black dark:text-white"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-lg text-black dark:text-white" href="/uses">
              Uses
            </Link>
          </li>
          <li className="mr-6">
            <a
              href="mailto:blake@blake.id"
              className="text-lg text-black dark:text-white"
            >
              Contact
            </a>
          </li>
          <span className="hidden sm:block mr-6 border-l-2 border-gray-200 dark:border-gray-800 h-6" />
          <li className="mr-6">
            <a target="_blank" href="https://www.npmjs.com/~blakewilson">
              <span className="sm:sr-only text-lg text-black dark:text-white">
                NPM
              </span>
              <FaNpm className="hidden sm:block text-3xl" />
            </a>
          </li>
          <li className="mr-6">
            <a target="_blank" href="https://github.com/blakewilson">
              <span className="sm:sr-only text-lg text-black dark:text-white">
                GitHub
              </span>
              <BsGithub className="hidden sm:block text-3xl" />
            </a>
          </li>
          <li className="mr-6">
            <a target="_blank" href="https://twitter.com/sundaycode">
              <span className="sm:sr-only text-lg text-black dark:text-white">
                Twitter
              </span>
              <BsTwitterX className="hidden sm:block text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
