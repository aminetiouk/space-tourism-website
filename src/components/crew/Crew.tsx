import data from '../../lib/data.json';
import { useState } from 'react';
import Title from '../Title';
import PageWrapper from '../PageWrapper';

export default function Crew() {
  const crews = data.crew;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!crews || crews.length === 0) return null;

  const currentCrew = crews[currentIndex];
  const imgSrc = `/assets/crew/${currentCrew.images.webp.split('/').pop()}`;

  return (
    <div className="crew-container">
      <Title number="02" text="MEET YOUR CREW" />
      <div className="crew">
        <div className="crew-content">
          <PageWrapper key={`crew-content-${currentIndex}`}>
            <div>
              <h3 className="text-preset-4">
                {currentCrew.role.toUpperCase()}
              </h3>
              <h2 className="text-preset-3">
                {currentCrew.name.toUpperCase()}
              </h2>
              <p className="text-preset-9">{currentCrew.bio}</p>
            </div>
          </PageWrapper>
        </div>
        <div className="crew-image">
          <PageWrapper key={`crew-image-${currentIndex}`}>
            <img src={imgSrc} alt="crew image" />
          </PageWrapper>
        </div>
        <div className="crew-pagination">
          <ul className="crew-pagination__items">
            {crews.map((crew, index) => (
              <li key={crew.name}>
                <button
                  className={`crew-pagination__button ${index === currentIndex ? 'crew-button__active' : ''}`}
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
