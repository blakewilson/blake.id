import { existsSync, mkdirSync, readdirSync, renameSync } from "fs";
import { spawnSync } from "child_process";

const blogPosts = readdirSync("./content/blog");

blogPosts.forEach((blogPost) => {
  const dir = readdirSync(`./content/blog/${blogPost}`);

  dir.forEach((file) => {
    if (file === "index.md") {
      spawnSync("git", [
        `mv`,
        `./content/blog/${blogPost}/${file}`,
        `./_posts/${blogPost}.md`,
      ]);
    } else {
      if (!existsSync(`./public/${blogPost}`)) {
        mkdirSync(`./public/${blogPost}`);
      }

      spawnSync("git", [
        `mv`,
        `./content/blog/${blogPost}/${file}`,
        `./public/${blogPost}/${file}`,
      ]);
    }
  });
});

console.log(blogPosts);
