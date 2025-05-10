import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home__container">
      <section className="home__content">
        <p className="home__subtitle ">SO, YOU WANT TO TRAVEL TO</p>
        <p className="home__title">SPACE</p>
        <p className="home__description">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <div className="home__cta">
        <Link to="/destination" aria-label="Explore space destinations">
          <button className="home__button text-preset-4">EXPLORE</button>
        </Link>
      </div>
    </div>
  );
}
