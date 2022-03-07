import { PropsWithChildren } from "react";

export interface PostContent {}

export default function PostContent(props: PropsWithChildren<PostContent>) {
  return (
    <div className="prose dark:prose-invert prose-lg md:prose-2xl mx-auto prose-pre:p-0 md:prose-pre:p-0">
      {props.children}
    </div>
  );
}
