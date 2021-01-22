import React from "react";

const List = ({ peoples }) => {
  console.log(peoples);
  return (
    <div>
      {peoples.map((people) => {
        return (
          <article key={people.id} className="person">
            <img src={people.image} alt={people.id} />
            <div>
              <h4>{people.name}</h4>
              <p>{people.age} years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
