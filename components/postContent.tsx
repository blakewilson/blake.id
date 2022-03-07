import { PropsWithChildren } from "react";

export interface PostContent {}

export default function PostContent(props: PropsWithChildren<PostContent>) {
  return (
    <div className="prose dark:prose-invert prose-lg md:prose-2xl mx-auto prose-pre:p-0 md:prose-pre:p-0 prose-h1:mb-6 md:prose-h1:mb-6 prose-figure:text-center md:prose-figure:text-center prose-video:ml-auto prose-video:mr-auto">
      {props.children}
    </div>
  );
}
