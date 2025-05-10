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
    <div className="crew-component">
      <Title number="02" text="MEET YOUR CREW" />
      <div className="crew__container">
        <div className="crew__content">
          <PageWrapper key={`crew-content-${currentIndex}`}>
            <div className="crew__info">
              <h3 className="crew__role text-preset-4">
                {currentCrew.role.toUpperCase()}
              </h3>
              <h2 className="crew__name text-preset-3">
                {currentCrew.name.toUpperCase()}
              </h2>
              <p className="crew__bio text-preset-9">{currentCrew.bio}</p>
            </div>
          </PageWrapper>
        </div>
        <div className="crew__image-wrapper">
          <PageWrapper key={`crew-image-${currentIndex}`}>
            <img
              src={imageSrc}
              alt={`${currentCrew.name}, ${currentCrew.role}`}
              className="crew__image"
            />
          </PageWrapper>
        </div>
        <div className="crew__navigation">
          <ul className="crew__pagination">
            {crews.map((crew, index) => (
              <li key={crew.name}>
                <button
                  className={`crew__pagination-button ${index === currentIndex ? 'crew__pagination-button--active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`View ${crew.name}`}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
