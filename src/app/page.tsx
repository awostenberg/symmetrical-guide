import Link from "next/link";

const Home = () => {
  return(
    <div>
      <h1>Home Page</h1>
      <button className="btn btn-primary">Button</button>
      <ul>
        <li> <Link href="/">Home</Link>  </li>
        <li> <Link href="/about">About</Link>   </li>
        <li> <Link href="/about/contact">Contact</Link> </li>
      </ul>
    </div>
  )
}

export default Home //todo I think this can be done above on 1st line
                    // export default function Home ()