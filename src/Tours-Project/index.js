import React, { useContext } from "react";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";
import { TourContext } from "./Context/TourContext";
import "./style.css";

// TODO: Use Context Api instead of this mess.
const ToursProject = () => {
  const { tours, loading, setLoading, removeTour, getTours } = useContext(
    TourContext
  );
  // console.log(tours);

  if (tours.length === 0) {
    setLoading(false);
    return (
      <div>
        <h2>No Tours Left</h2>
        <button
          style={{ margin: "30px 60px" }}
          className="btn"
          onClick={getTours}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Our Tours</h2>
      {loading ? <Loading /> : null}
      {tours
        ? tours.map((tour) => {
            return (
              <div key={tour.id}>
                <Tours {...tour} removeTour={removeTour} />
              </div>
            );
          })
        : "Hello"}
    </section>
  );
};

export default ToursProject;
