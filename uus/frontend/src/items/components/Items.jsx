import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ItemsList from '../components/ItemsList';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';

const Items = () => {
  const { status, error, data } = useQuery({
    queryKey: ['itemsData'],
    queryFn: () =>
      fetch('http://localhost:5000/api/items').then((res) => res.json()),
  });

  if (status === 'loading') {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <h1>An error occurred: {error.message}</h1>;
  }

  return (
    <div>
      <h2>Menu Items</h2>
      <ItemsList items={data} />
    </div>
  );
};

export default Items;
