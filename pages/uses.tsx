import Header from "../components/header";
import SEO from "../components/seo";
import { PostType } from "./[slug]";
import Image from "next/image";

export default function Home({ allPosts }: { allPosts: PostType[] }) {
  return (
    <>
      <SEO title="Uses | Blake Wilson - Software Engineer and Creator" />
      <Header />

      <div className="container max-w-6xl mx-auto p-4">
        <div className="prose prose-lg md:prose-2xl dark:prose-invert mx-auto">
          <Image
            className="rounded-xl shadow-xl"
            alt="My Desk Setup"
            src="/desk.jpeg"
            width="4032"
            height="3024"
            layout="responsive"
          />
          <h2>What I Use</h2>

          <h3>Hardware</h3>

          <ul>
            <li>Apple MacBook Pro 16" (2019)</li>
            <li>Apple Studio Display</li>
            <li>Keychron K2 Keyboard</li>
            <li>Logitech MS Master 2S Mouse</li>
            <li>Grovemade Desk Pad</li>
            <li>Logitech C922 Webcam</li>
            <li>Herman Miller Aeron Chair</li>
            <li>Elgato Key Light Air</li>
            <li>CalDigit TS3 Plus Dock</li>
            <li>Focusrite Scarlett Solo Audio Interface</li>
            <li>Shure SM7B Microphone</li>
            <li>Blue Microphone Boom Arm</li>
            <li>Autonomous Sit/Stand Desk Legs</li>
            <li>Ikea IDÅSEN Tabletop</li>
            <li>Hydroflask</li>
          </ul>

          <h3>Software</h3>

          <ul>
            <li>VS Code (Theme: Night Owl)</li>
            <li>MonoLisa Font</li>
            <li>Final Cut Pro</li>
            <li>OBS</li>
            <li>Firefox</li>
            <li>Notion</li>
            <li>Spotify</li>
            <li>iTerm2</li>
            <li>Rectangle</li>
            <li>1Password</li>
            <li>Slack</li>
            <li>Zoom</li>
            <li>Postman</li>
            <li>GitHub Desktop</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </>
  );
}
