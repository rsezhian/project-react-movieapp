import React from "react";
import "./individualcard.css";

function IndividualCard(props) {
  return (
    <div className="totalcard">
      <div className="card card1 m-2" style={{ width: "20rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/original/${props.image}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">{props.released ? props.released : ""}</p>
          {props.genres_array &&
            props.genres_array.map((value) => {
              return (
                <span className="badge text-bg-info p-1 m-1">{value.name}</span>
              );
            })}
          <br />
          <br />
          <a
            href={props.link}
            target="_blank"
            className="btn btn-danger"
            rel="noopener noreferrer"
          >
            Check Now &#8599;
          </a>
        </div>
      </div>
    </div>
  );
}

export default IndividualCard;
