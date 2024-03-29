import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import './catalog.scss';
import Modal from '../Modal/Modal';
import SpanMap from 'funcs/spanFunc';
import { ReactComponent as Heart } from 'icons/heart.svg';
import { toggleFavourite } from '../../redux/favouriteReducer';
import { selectFavArr } from '../../redux/favouriteSelector';

const CatalogList = ({ filteredCars }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavArr);

  const [isOpened, setIsOpened] = useState(false);
  const [data, setData] = useState('');

  const onToggleModal = modalData => {
    setIsOpened(!isOpened);
    setData(modalData);
  };

  const handleClick = data => {
    dispatch(toggleFavourite(data));
  };

  return (
    <>
      <ul className="ctlgList">
        {filteredCars &&
          filteredCars.map(data => {
            const addressParts = data.address
              .split(', ')
              .filter(part => !part.includes('Example'));
            return (
              <li key={uuidv4()} className="ctlgEl">
                <div className="imgBox">
                  <img
                    src={data.img}
                    alt={`${data.make} ${data.model}`}
                    className="carImage"
                  />
                  <Heart
                    className={
                      favourites.some(car => car.id === data.id)
                        ? `heartBtn active`
                        : `heartBtn`
                    }
                    onClick={() => handleClick(data)}
                  />
                </div>
                <div className="titleBox">
                  <p className="carName">
                    <span className="make">{data.make} </span>{' '}
                    {data.model && <span className="model">{data.model}</span>},{' '}
                    <span className="make">{data.year} </span>
                  </p>
                  <span className="make">{data.rentalPrice} </span>

                  <p className="carAddress">
                    {addressParts.map(part => (
                      <span key={uuidv4()} className="addressPart">
                        {part}
                      </span>
                    ))}
                    {SpanMap(data.rentalCompany, data.type, data.model)}
                  </p>
                </div>
                <button
                  className="learnMore"
                  onClick={() => onToggleModal(data)}
                >
                  Learn more
                </button>
              </li>
            );
          })}
      </ul>
      {isOpened && <Modal data={data} onClose={() => onToggleModal(null)} />}
    </>
  );
};

export default CatalogList;
