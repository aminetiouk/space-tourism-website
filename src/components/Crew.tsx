import data from '../lib/data.json';
import { useState } from 'react';
import Title from './Title';
import PageWrapper from './PageWrapper';

export default function Crew() {
  const crews = data.crew;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!crews || crews.length === 0) return null;

  const currentCrew = crews[currentIndex];
  const imageSrc = `/assets/crew/${currentCrew.images.webp.split('/').pop()}`;

  return (
    <main className="crew">
      <Title number="02" text="MEET YOUR CREW" />

      <div className="crew__layout">
        <section className="crew__details">
          <PageWrapper key={`crew-profile-${currentIndex}`}>
            <article className="crew__profile" aria-labelledby="crew-name">
              <h3 className="crew__role text-preset-4">
                {currentCrew.role.toUpperCase()}
              </h3>
              <h2 className="crew__name text-preset-3">
                {currentCrew.name.toUpperCase()}
              </h2>
              <p className="crew__bio text-preset-9">{currentCrew.bio}</p>
            </article>
          </PageWrapper>
        </section>

        <figure className="crew__photo">
          <PageWrapper key={`crew-photo-${currentIndex}`}>
            <img
              src={imageSrc}
              alt={`${currentCrew.name}, ${currentCrew.role}`}
              className="crew__photo-img"
            />
          </PageWrapper>
        </figure>

        <nav className="crew__navigation" aria-label="Crew Member Selector">
          <ul className="crew__nav-list">
            {crews.map((crew, index) => (
              <li key={crew.name} className="crew__nav-item">
                <button
                  onClick={() => setCurrentIndex(index)}
                  className={`crew__nav-button ${
                    index === currentIndex ? 'crew__nav-button--active' : ''
                  }`}
                  aria-label={`View crew member ${crew.name}`}
                >
                  <span className="crew__nav-ring"></span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
