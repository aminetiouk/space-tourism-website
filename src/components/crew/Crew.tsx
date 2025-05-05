import PageWrapper from '../PageWrapper';
import data from '../../lib/data.json';
import { useState } from 'react';

type TCrewCardProps = {
  role: string;
  name: string;
  bio: string;
  imageKey: string;
};

function CrewCard({ role, name, bio, imageKey }: TCrewCardProps) {
  const imgSrc = `/assets/crew/${imageKey}`;
  console.log(imageKey);
  return (
    <div className="crew">
      <div className="crew-info">
        <h3 className="text-preset-4">{role}</h3>
        <h2 className="text-preset-3">{name}</h2>
        <p className="text-preset-9">{bio}</p>
      </div>
      <div className="image-container">
        <img
          src={imgSrc}
          alt="crew image"
          className={`crew-image ${imageKey === 'image-mark-shuttleworth.webp' ? 'crew-image__edit' : ''}`}
        />
      </div>
    </div>
  );
}

export default function Crew() {
  const crews = data.crew;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCrew = crews[currentIndex];
  const imageKey = currentCrew.images.webp.split('/').pop() ?? '';

  return (
    <div className="crew-container">
      <h1 className="text-preset-5">
        <span className="title-number">02</span> MEET YOUR CREW
      </h1>
      <nav>
        <ul className="crew-nav">
          {crews.map((crew, index) => (
            <li key={crew.name}>
              <button
                className={`crew-button ${index === currentIndex ? 'crew-button__active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            </li>
          ))}
        </ul>
      </nav>
      <PageWrapper page={`crew-${currentIndex}`}>
        <CrewCard
          role={currentCrew.role.toUpperCase()}
          name={currentCrew.name.toUpperCase()}
          bio={currentCrew.bio}
          imageKey={imageKey}
        />
      </PageWrapper>
    </div>
  );
}
