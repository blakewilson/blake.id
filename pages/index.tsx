import Image from "next/image";
import Link from "next/link";
import FormatDate from "../components/format-date";
import Header from "../components/header";
import { getAllPosts } from "../lib/api";

export default function Home() {
  return (
    <>
      <Header />

      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <Image
              className="rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              width={600}
              height={800}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 prose prose-lg md:prose-2xl dark:prose-invert">
            <h2>Hi, I'm Blake</h2>

            <p className="text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
              pulvinar risus, quis dapibus orci.
            </p>

            <p>
              Aenean vitae tellus in lacus sagittis interdum ut vel lectus.
              Proin at placerat ligula, nec ultrices ex. Phasellus in mattis
              tellus, suscipit dapibus nisl. Ut pretium interdum maximus. Fusce
              dictum lorem vel sem pellentesque, quis volutpat neque imperdiet.
              Vivamus quis nulla diam.{" "}
            </p>

            <h4>Favorite Posts</h4>
            <ul>
              <li>
                <Link href="/">Lorem ipsum</Link>
              </li>
              <li>
                <Link href="/">Lorem ipsum</Link>
              </li>
              <li>
                <Link href="/">Lorem ipsum</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
