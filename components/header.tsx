import Link from "next/link";
import { BsGithub } from "react-icons/bs/";
import { FaNpm } from "react-icons/fa";

export default function Header() {
  return (
    <header className="mb-8">
      <div className="w-full max-w-6xl p-4 mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <Link href="/">
          <a className="mb-6 sm:mb-0">
            <div className="text-3xl font-bold">Blake Wilson</div>
            <div className="text-md">Software Engineer</div>
          </a>
        </Link>

        <ul className="flex items-center">
          <li className="mr-6">
            <Link href="/posts">
              <a className="text-lg text-black dark:text-white">Posts</a>
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
          <li>
            <a target="_blank" href="https://github.com/blakewilson">
              <span className="sm:sr-only text-lg text-black dark:text-white">
                GitHub
              </span>
              <BsGithub className="hidden sm:block text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
