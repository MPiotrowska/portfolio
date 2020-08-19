const Repo = (props) => {
  return (
    <article className="card">
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <footer className="cardFooter">
        <a className="cardButton" target="_blank" rel="noopener noreferrer" href={props.liveSite}>
          Live Site
        </a>
        <a className="cardButton" target="_blank" rel="noopener noreferrer" href={props.url}>
          Code
        </a>
      </footer>
    </article>
  );
};

export default Repo;
