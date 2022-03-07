import Link from "next/link";
import { BsGithub, BsStackOverflow } from "react-icons/bs/";

export default function Header() {
  return (
    <header className="mb-8">
      <div className="w-full max-w-6xl p-4 mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="">
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
              target="_blank"
              href="https://stackoverflow.com/users/11711383/sundaycode"
            >
              <BsStackOverflow className="text-3xl" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/blakewilson">
              <BsGithub className="text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
