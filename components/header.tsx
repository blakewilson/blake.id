import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-2 border-gray-800 mb-8">
      <div className="w-full max-w-6xl p-4 mx-auto flex items-center justify-between shadow shadow-invert">
        <Link href="/">
          <a className="text-2xl text-white font-extrabold">BLAKE.ID</a>
        </Link>

        <ul>
          <li>
            <Link href="/posts">
              <a className="text-lg text-white">Writing</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
