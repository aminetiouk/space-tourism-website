import data from '../../lib/data.json';
import { useState } from 'react';
import Title from '../Title';
import PageWrapper from '../PageWrapper';

export default function Technology() {
  const technologies = data.technology;
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = technologies[currentIndex];

  return (
    <main className="technology">
      <Title
        text="SPACE LAUNCH 101"
        number="03"
        className="technology__title"
      />

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
          <picture className="technology__media">
            <source
              media="(max-width: 820px)"
              srcSet={`/assets/technology/${current.images.portrait.split('/').pop()}`}
            />
            <source
              media="(max-width: 1275px)"
              srcSet={`/assets/technology/${current.images.landscape.split('/').pop()}`}
            />
            <img
              src={`/assets/technology/${current.images.portrait.split('/').pop()}`}
              alt={`${current.name} illustration`}
              className="technology__image"
            />
          </picture>
        </PageWrapper>
      </div>
    </main>
  );
}
