import Image from "next/image";

export default function HomeAbout() {
  return (
    <div className="container max-w-6xl flex mx-auto items-center">
      <div className="w-1/2 pr-4">
        <Image
          layout="responsive"
          className="rounded"
          width={3741}
          height={2085}
          src="https://images.unsplash.com/photo-1645470112452-277c99f78040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
        />
      </div>
      <div className="w-1/2 pl-4">
        Hi there, I'm Blake! I am a software engineer who enjoys building
        products. I'm using this blog to write about things that I either find
        interesting, or would like to reference in the future.
      </div>
    </div>
  );
}
