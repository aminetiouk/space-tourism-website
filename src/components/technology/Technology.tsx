import PageWrapper from '../PageWrapper';
import data from '../../lib/data.json';
import Title from '../Title';
import { useState } from 'react';

type TechnologyCardProps = {
  name: string;
  description: string;
  imageKey: string;
};

function TechnologyCard({ name, description, imageKey }: TechnologyCardProps) {
  const imageSrc = `/assets/technology/${imageKey}`;

  return (
    <PageWrapper key={`tech-${name}`}>
      <div className="technology-content">
        <section className="technology-info">
          <h3 className="text-preset-4">THE TERMINOLOGY…</h3>
          <h2 className="text-preset-3">{name}</h2>
          <p className="text-preset-9">{description}</p>
        </section>
        <section className="technology-image__container">
          <img
            src={imageSrc}
            alt="technology image"
            className="technology-image"
          />
        </section>
      </div>
    </PageWrapper>
  );
}

export default function Technology() {
  const technologies = data.technology;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTechnology = technologies[currentIndex];
  const imageKey = currentTechnology.images.portrait.split('/').pop() ?? '';

  return (
    <div className="technology-container">
      <Title text="SPACE LAUNCH 101" number="03" />
      <nav>
        <ul className="technology-nav">
          {technologies.map((technology, index) => (
            <li key={technology.name}>
              <button
                className={`technology-button text-preset-4 ${currentIndex === index ? 'technology-button__active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <TechnologyCard
        name={currentTechnology.name.toUpperCase()}
        description={currentTechnology.description}
        imageKey={imageKey}
      />
    </div>
  );
}
