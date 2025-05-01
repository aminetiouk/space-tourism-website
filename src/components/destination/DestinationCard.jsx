export default function DestinationCard({name, image, description, distance, travelTime}) {
  return (
    <div className="destination">
      <img src={image} alt={name} className="destination-image" />

      <div className="destination-info">
        <h2>{name}</h2>
        <p>{description}</p>

        <div className="destination-meta">
          <div>
            <h3>AVG. DISTANCE</h3>
            <p>{distance}</p>
          </div>
          <div>
            <h3>Est. travel time</h3>
            <p>{travelTime}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
