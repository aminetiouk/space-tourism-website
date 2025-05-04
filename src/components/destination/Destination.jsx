import { useState } from 'react';
import data from '../../assets/data.json';
import PageWrapper from '../PageWrapper';

const images = import.meta.glob('/src/assets/destination/*.{png,webp}', {
  eager: true,
  as: 'url',
});

function DestinationCard({
  name,
  description,
  distance,
  travelTime,
  imageKey,
  destinations,
  currentIndex,
  setCurrentIndex
}) {
  const imgSrc = images[`/src/assets/destination/${imageKey}`];

  return (
    <div className="destination">
      <img src={imgSrc} alt={name} className="destination-image" />

      <div className="destination-info">
        <nav>
          <ul className="destination-tabs">
            {destinations.map((destination, index) => (
              <li key={destination.name}>
                <button
                  className={`destination-nav text-preset-8 ${
                    index === currentIndex ? 'destination-tabs__active' : ''
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {destination.name.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <h2 className="text-preset-2">{name}</h2>
        <p className="text-preset-9">{description}</p>

        <div className="destination-meta">
          <div>
            <h3 className="text-preset-7">AVG. DISTANCE</h3>
            <p className="text-preset-6">{distance}</p>
          </div>
          <div>
            <h3 className="text-preset-7">Est. travel time</h3>
            <p className="text-preset-6">{travelTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Destination() {
  const destinations = data.destinations;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDestination = destinations[currentIndex];
  const imageKey = currentDestination.images.webp.split('/').pop();

  return (
    <PageWrapper>
      <div className="destination-page">
        <h1 className="text-preset-5">
          <span>01</span> PICK YOUR DESTINATION
        </h1>

        <DestinationCard
          name={currentDestination.name.toUpperCase()}
          description={currentDestination.description}
          distance={currentDestination.distance}
          travelTime={currentDestination.travel}
          imageKey={imageKey}
          destinations={destinations}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </PageWrapper>
  );
}
