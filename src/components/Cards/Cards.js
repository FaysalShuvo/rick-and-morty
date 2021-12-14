import React from "react";
import styles from "./Cards.module.scss";

function Cards({ results }) {
  let display;
  if (results) {
    display = results.map((data) => {
      const { id, name, image, location, status } = data;
      return (
        <div key={id} className="col-4 position-relative">
          <div className={`${styles.cards} p-1`}>
            <img src={image} alt="" className="img-fluid rounded-top" />
            <div className="content">
              <div className="fs-5 fw-bolder mb-2">{name}</div>
              <div className="">
                <div className="fs-6 fw-light ">
                  last seen:
                  <span className="fs-6 fw-normal mx-1">{location.name}</span>
                </div>
              </div>
            </div>
          </div>
          {status === "Alive" ? (
            <div
              className={`${styles.badge} badge  bg-success position-absolute`}
            >
              {status}
            </div>
          ) : status === "Dead" ? (
            <div
              className={`${styles.badge} badge  bg-danger position-absolute`}
            >
              {status}
            </div>
          ) : (
            <div
              className={`${styles.badge} badge  bg-secondary position-absolute`}
            >
              {status}
            </div>
          )}
        </div>
      );
    });
  } else {
    display = "No Characters Found";
  }

  return <>{display}</>;
}

export default Cards;
