import React, { useEffect, useState } from 'react';

function FighterList() {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    fetch('/api/fighters')
      .then((response) => response.json())
      .then((data) => setFighters(data));
  }, []);

  return (
    <div>
      <h2>Fighter List</h2>
      <ul>
        {fighters.map((fighter) => (
          <li key={fighter.id}>{fighter.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FighterList;
