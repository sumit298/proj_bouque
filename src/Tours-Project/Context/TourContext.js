import React, { createContext, useState, useEffect } from "react";

export const TourContext = createContext();

const TourProvider = ({ children }) => {
  const url = "https://course-api.netlify.app/api/react-tours-project";
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      // console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };
  const removeTour = (id) => {
    const newRemovedArray = tours.filter((tour) => tour.id !== id);
    setTours(newRemovedArray);
  };
  useEffect(() => {
    getTours();
  }, []);

  return (
    <TourContext.Provider value={{ tours, loading, getTours, setLoading, removeTour }}>
      {children}
    </TourContext.Provider>
  );
};

export default TourProvider;
