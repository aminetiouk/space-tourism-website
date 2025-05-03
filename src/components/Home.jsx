import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <section className="hero-text">
          <p className="text-preset-5">SO, YOU WANT TO TRAVEL TO</p>
          <p className="text-preset-1">SPACE</p>
          <p className="text-preset-9">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>

        <Link to="/destination">
          <button className="hero-button text-preset-4">EXPLORE</button>
        </Link>
      </div>
    </div>
  );
}
