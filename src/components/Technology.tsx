import PageWrapper from './PageWrapper';
import data from '../lib/data.json';
import Title from './Title';
import { useState } from 'react';

export default function Technology() {
  const technologies = data.technology;
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = technologies[currentIndex];
  const imageKey = current.images.portrait.split('/').pop();
  const imageSrc = `/assets/technology/${imageKey}`;

  return (
    <main className="technology">
      <Title text="SPACE LAUNCH 101" number="03" />

      <div className="technology__layout">
        <div className="technology__wrapper">
          <nav
            className="technology__tabs"
            aria-label="Technology Navigation Tabs"
          >
            <ul className="technology__tab-list" role="tablist">
              {technologies.map((tech, index) => (
                <li key={tech.name} className="technology__tab-item">
                  <button
                    onClick={() => setCurrentIndex(index)}
                    className={`technology__tab-button text-preset-4 ${
                      currentIndex === index
                        ? 'technology__tab-button--active'
                        : ''
                    }`}
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-controls={`technology-panel-${index}`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <section
            className="technology__details"
            role="tabpanel"
            aria-labelledby={`technology-tab-${currentIndex}`}
          >
            <PageWrapper key={`technology-image-${currentIndex}`}>
            <article className="technology__info">
              <section className="technology__intro">
                <h3 className="technology__subheading text-preset-4">
                  THE TERMINOLOGY…
                </h3>
                <h2 className="technology__heading text-preset-3">
                  {current.name.toUpperCase()}
                </h2>
              </section>
              <p className="technology__description text-preset-9">
                {current.description}
              </p>
            </article>
            </PageWrapper>
          </section>
        </div>
        <PageWrapper key={`technology-image-${currentIndex}`}>
          <figure className="technology__media">
            <img
              src={imageSrc}
              alt={`${current.name} illustration`}
              className="technology__image"
            />
          </figure>
        </PageWrapper>
      </div>
    </main>
  );
}
