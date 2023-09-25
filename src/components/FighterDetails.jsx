import React, { useEffect, useState } from 'react';

function FighterDetail({ match }) {
  const [fighter, setFighter] = useState({});

  useEffect(() => {
    fetch(`/api/fighters/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => setFighter(data));
  }, [match.params.id]);

  return (
    <div>
      <h2>Fighter Detail</h2>
      <p>Name: {fighter.name}</p>
      <p>Style: {fighter.strength}</p>
      <p>Movelist: {fighter.movelist}</p>
    </div>
  );
}

export default FighterDetail;
