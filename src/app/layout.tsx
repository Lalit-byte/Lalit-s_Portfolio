import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

export const metadata: Metadata = {
  title: "Lalit Bisht | Software Developer",
  description:
    "Full-Stack Software Engineer with experience in Next.js, TypeScript, Node.js, PostgreSQL, and Real-Time Systems. Software Developer Intern at Technogetic Pvt Ltd.",
  keywords: [
    "Lalit Bisht",
    "Software Developer",
    "Full-Stack Engineer",
    "Technogetic",
    "Next.js Portfolio",
    "TypeScript",
    "Dehradun Developer",
  ],
  authors: [{ name: "Lalit Bisht" }],
  creator: "Lalit Bisht",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lalitbisht.dev",
    title: "Lalit Bisht | Software Developer",
    description:
      "Full-Stack Software Engineer specializing in Next.js, Node.js, PostgreSQL, and high-performance web systems.",
    siteName: "Lalit Bisht Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lalit Bisht | Software Developer",
    description:
      "Full-Stack Software Engineer specializing in Next.js, Node.js, PostgreSQL, and high-performance web systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
