import { useState } from 'react';
import data from '../../assets/data.json';
import DestinationCard from './DestinationCard';

export default function Destination() {
  const destinations = data.destinations;
  const [current, setCurrent] = useState(0);
  const destination = destinations[current];
  return (
    <div className="destination-page">
      <h1>
        <span>01</span> PICK YOUR DESTINATION
      </h1>

      <nav className="destination-tabs">
        {destinations.map((d, index) => (
          <button key={d.name} onClick={() => setCurrent(index)} />
        ))}
      </nav>

      <DestinationCard {...destination} />
    </div>
  );
}
