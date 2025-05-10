import React, { useState } from 'react';
import data from '../lib/data.json';
import Title from './Title';
import PageWrapper from './PageWrapper';

export default function Destination() {
  const destinations = data.destinations;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDestination = destinations[currentIndex];
  const imageKey = currentDestination.images.webp.split('/').pop();
  const imgSrc = `/assets/destination/${imageKey}`;

  return (
    <main className="destination">
      <Title number="01" text="PICK YOUR DESTINATION" />

      <section className="destination__content">
        <figure className="destination__media">
          <img
            src={imgSrc}
            alt={`View of ${currentDestination.name}`}
            className="destination__image"
            loading="lazy"
          />
        </figure>

        <article className="destination__details">
          <nav
            className="destination__nav"
            aria-label="Destination Navigation Tabs"
          >
            <ul className="destination__tab-list" role="tablist">
              {destinations.map((destination, index) => (
                <li key={destination.name} role="presentation">
                  <button
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-controls={`destination-panel-${index}`}
                    id={`destination-tab-${index}`}
                    className={`destination__tab ${
                      index === currentIndex ? 'destination__tab--active' : ''
                    } text-preset-8`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    {destination.name.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div
            role="tabpanel"
            id={`destination-panel-${currentIndex}`}
            aria-labelledby={`destination-tab-${currentIndex}`}
            className="destination__panel"
          >
            <h1 className="destination__title text-preset-2">
              {currentDestination.name}
            </h1>
            <p className="destination__description text-preset-9">
              {currentDestination.description}
            </p>
            <hr className="destination__divider"></hr>

            <div className="destination__metrics">
              <div className="destination__metric">
                <h2 className="destination__label text-preset-7">
                  AVG. DISTANCE
                </h2>
                <p className="destination__value text-preset-6">
                  {currentDestination.distance}
                </p>
              </div>

              <div className="destination__metric">
                <h2 className="destination__label text-preset-7">
                  Est. travel time
                </h2>
                <p className="destination__value text-preset-6">
                  {currentDestination.travel}
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
