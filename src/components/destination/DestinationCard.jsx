const images = import.meta.glob('/src/assets/destination/*.{png,webp}', {
  eager: true,
  as: 'url'
});

export default function DestinationCard({
  name,
  description,
  distance,
  travelTime,
  imageKey
}) {
  const imgSrc = images[`/src/assets/destination/${imageKey}`];
  return (
    <div className="destination">
      <img src={imgSrc} alt={name} className="destination-image" />

      <div className="destination-info">
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
