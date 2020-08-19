const Repo = (props) => {
  return (
    <article className="card">
      <header className="cardHeader">
        <h4>{props.name}</h4>
        <span className="techIcons">
          {props.technologies.map((tech) => {
            return <img width="20" height="20" src={`images/${tech}`} alt="" />;
          })}
        </span>
      </header>

      <p>{props.description}</p>
      <footer className="cardFooter">
        <a
          className="cardButton"
          target="_blank"
          rel="noopener noreferrer"
          href={props.liveSite}
        >
          Live Site
        </a>
        <a
          className="cardButton"
          target="_blank"
          rel="noopener noreferrer"
          href={props.url}
        >
          Code
        </a>
      </footer>
    </article>
  );
};

export default Repo;
