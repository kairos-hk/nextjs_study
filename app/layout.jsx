import Link from "next/link";
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/user">User</Link>
          <Link href="/project">Project</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/about">About</Link>
        </div>
        {children}
      </body>
    </html>
  )
}