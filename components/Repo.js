const Repo = (props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.url}
      className="card"
    >
      <h4>{props.name} &rarr;</h4>
    </a>
  );
};

export default Repo;
