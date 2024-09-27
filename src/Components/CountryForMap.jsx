export default function CountryForMap(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.location}</p>
      <p>{props.language}</p>
      <img src={props.flag} alt={`Flag of ` + props.title} width="300px" />
    </div>
  );
}
