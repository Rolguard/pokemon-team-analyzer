import { Link } from "react-router"

function LandingPage() {
    return (
        // Navbar 
        // Logo for Poke Growth, Why work with us, Resources tab, Join the Waitlist 
        <>
            <div className="flex-col justify-center items-center">
                <h1 className="text-6xl font-bold underline">Poke Growth</h1>
                <h4>Level up your Pokemon VGC game with data-driven decision-making. </h4>

            </div>
            <div>
                <h2>Why work with us?</h2>
                <div>
                    <h4>Icon + Subheading 1 Card</h4>
                    <p>Card subtext 1</p>
                </div>
                <div>
                    <h4>Icon + Subheading 2 Card</h4>
                    <p>Card subtext 2</p>
                </div>
                <div>
                    <h4>Icon + Subheading 3 Card</h4>
                    <p>Card subtext 3</p>
                </div>
            </div>
            <div>
                <button>Explore</button>
                <button>Join the waitlist</button>
            </div>
            <div>
                <h1>Resources</h1>
                <Link to="/calculator/type-coverage">Team Type Coverage</Link>
            </div>
        </>
    )
}

export default LandingPage;