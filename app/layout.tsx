import { Metadata } from "next";
import "../styles/globals.css";
import "highlight.js/styles/github-dark.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://blake.id"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
