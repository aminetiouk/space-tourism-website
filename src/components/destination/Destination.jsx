import { useState } from 'react';
import data from '../../assets/data.json';
import DestinationCard from './DestinationCard';

export default function Destination() {
  const destinations = data.destinations;
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleTabClick = index => {
    setCurrentIndex(index);
  };

  const currentDestination = destinations[currentIndex];
  const imageKey = currentDestination.images.webp.split('/').pop();

  return (
    <div className="destination-page">
      <h1>
        <span>01</span> PICK YOUR DESTINATION
      </h1>

      <nav className="destination-tabs">
        {destinations.map((dest, index) => (
          <button key={dest.name} onClick={() => handleTabClick(index)}>
            {dest.name}
          </button>
        ))}
      </nav>

      <DestinationCard 
        name={currentDestination.name}
        description={currentDestination.description}
        distance={currentDestination.distance}
        travelTime={currentDestination.travel}
        imageKey={imageKey}
      />
    </div>
  );
}
