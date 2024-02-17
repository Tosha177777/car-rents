import React, { useEffect, useState } from 'react';
import CatalogList from 'components/CatalogList/CatalogList';
import fetchCars from 'services/api';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
  // const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const newCars = await fetchCars(currentPage, limit);
        console.log('currentPage: ', currentPage);
        console.log('newCars: ', newCars.length);

        setCars(prevCars =>
          currentPage === 1 ? newCars : [...prevCars, ...newCars]
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllCars();
  }, [currentPage]);

  const loadMore = cars.length >= currentPage * limit;

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <section className="catalog-section">
      <div className="container">
        <p>CatalogPage</p>
        <CatalogList cars={cars} />
        {loadMore && <button onClick={() => handleClick()}>Load more</button>}
      </div>
    </section>
  );
};

export default CatalogPage;
