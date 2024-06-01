import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greg\'s Portfolio of Small Bets",
  description: "Tech Courses and Books",
  keywords: 'passive income, small bets, tech courses, tech books, tech tutorials',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">Greg's portfolio of small bets</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/about">About</Link></li>
              <li><a>Link 2</a></li>

              <li>
  
              </li>
            </ul>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
