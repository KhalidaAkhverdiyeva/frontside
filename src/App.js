
import React from 'react';
import Card from './components/Card';

const App = () => {
  const data = [
    { name: 'John', lastName: 'Doe', status: 'Doing', score: 75 },
    { name: 'Jane', lastName: 'Smith', status: 'Done', score: 90 },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default App;
