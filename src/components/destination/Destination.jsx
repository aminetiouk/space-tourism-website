import { useState } from 'react';
import data from '../../assets/data.json';
import DestinationCard from './DestinationCard';
import PageWrapper from '../PageWrapper';

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

        <nav className="destination-tabs">
          <ul>
            {destinations.map((destination, index) => (
              <li key={destination.name}>
                <button
                  className={` destination-nav text-preset-8
                    ${index === currentIndex ? 'destination-tabs__active' : ''}
                  `}
                  onClick={() => setCurrentIndex(index)}
                >
                  {destination.name.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <DestinationCard
          name={currentDestination.name.toUpperCase()}
          description={currentDestination.description}
          distance={currentDestination.distance}
          travelTime={currentDestination.travel}
          imageKey={imageKey}
        />
      </div>
    </PageWrapper>
  );
}
