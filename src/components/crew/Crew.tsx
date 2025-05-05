import PageWrapper from '../PageWrapper';
import data from '../../lib/data.json';
import { useState } from 'react';

type TCrewCardProps = {
  crews: {
    role: string;
    name: string;
    bio: string;
    images: { webp: string };
  }[];
  role: string;
  name: string;
  bio: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  imageKey: string;
};

function CrewCard({
  crews,
  role,
  name,
  bio,
  currentIndex,
  setCurrentIndex,
  imageKey
}: TCrewCardProps) {
  const imgSrc = `/assets/crew/${imageKey}`;
  return (
    <div className="crew-content">
      <div className="crew-info">
        <h3>{role}</h3>
        <h2>{name}</h2>
        <p>{bio}</p>

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
        <img src={imgSrc} alt="crew image" className='crew-image'/>
      </div>
    </div>
  );
}

export default function Crew() {
  const crew = data.crew;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCrew = crew[currentIndex];
  const imageKey = currentCrew.images.webp.split('/').pop() ?? '';

  return (
    <PageWrapper>
      <div className="crew-container">
        <h1 className="text-preset-5">
          <span className='title-number'>02</span> MEET YOUR CREW
        </h1>
        <CrewCard
          crews={crew}
          role={currentCrew.role.toUpperCase()}
          name={currentCrew.name.toUpperCase()}
          bio={currentCrew.bio}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          imageKey={imageKey}
        />
      </div>
    </PageWrapper>
  );
}
