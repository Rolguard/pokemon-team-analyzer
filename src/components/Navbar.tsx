import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <Link to="/">Poke Growth</Link>

        <Link to="/why-work-with-us">Why work with us</Link>

        <Link to="/resources">Resources</Link>

        <Link to="/">Join the waitlist</Link>
      </div>
    </nav>
  )
}

export default Navbar;