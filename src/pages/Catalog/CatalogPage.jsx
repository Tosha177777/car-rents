import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import CatalogList from 'components/CatalogList/CatalogList';
import { fetchCars } from 'services/api';
import makesData from 'makes.json';
import './catalogPage.scss';
import { getAllCarsThunk } from '../../redux/catalogOperations';
import { ReactComponent as Arrow } from 'icons/arrowDawn.svg';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const [allCars, setAllCars] = useState([]);
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
  const [selectedMake, setSelectedMake] = useState('');
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    const everyCars = async () => {
      try {
        const { payload } = await dispatch(getAllCarsThunk());
        setAllCars(payload);
        return payload;
      } catch (error) {
        console.error(error);
      }
    };
    const fetchAllCars = async () => {
      try {
        const newCars = await fetchCars(currentPage, limit);

        setCars(prevCars =>
          currentPage === 1 ? newCars : [...prevCars, ...newCars]
        );
      } catch (error) {
        console.error(error);
      }
    };
    everyCars();
    fetchAllCars();
    setMakes(makesData);
  }, [currentPage, dispatch]);

  const loadMore = !selectedMake && allCars.length > cars.length;

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const filteredCars = selectedMake.toLowerCase()
    ? allCars.filter(
        car => car.make.toLowerCase() === selectedMake.toLowerCase()
      )
    : cars;

  return (
    <section>
      <div className="container withForm">
        <Formik
          initialValues={{
            car: '',
          }}
          onSubmit={({ car }) => {
            setSelectedMake(car);
          }}
        >
          {props => (
            <Form className="formList">
              <div className="relativeBox">
                <Field as="select" name="car" className="selector">
                  <option value="">Select car</option>
                  {makes.map(make => (
                    <option key={uuidv4()} value={make} className="option">
                      {make}
                    </option>
                  ))}
                </Field>
                <Arrow className="arrow" />
              </div>
              <button type="submit" className="learnMore filterBtn">
                Search
              </button>
            </Form>
          )}
        </Formik>
        <CatalogList filteredCars={filteredCars} />
        {loadMore && (
          <button onClick={() => handleClick()} className="loadMore">
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
