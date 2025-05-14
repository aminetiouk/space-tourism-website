import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="home__container">
      <section className="home__content">
          <motion.p
            className="home__subtitle text-preset-5 text-blue-300 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
          >
            SO, YOU WANT TO TRAVEL TO
          </motion.p>

          <motion.p
            className="home__title text-preset-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            SPACE
          </motion.p>

          <motion.p
            className="home__description text-preset-9 text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well, sit back and relax because we’ll give you a truly out-of-this-world
            experience!
          </motion.p>
      </section>

      <div className="home__cta">
        <Link to="/destination" aria-label="Explore space destinations">
          <button className="home__button text-preset-4">EXPLORE</button>
        </Link>
      </div>
    </div>
  );
}
