import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal/Modal';
import SpanMap from 'funcs/spanFunc';
import { ReactComponent as Heart } from 'icons/heart.svg';
import { ReactComponent as Cart } from 'icons/cart.svg';
import { toggleFavourite } from '../../redux/favouriteReducer';
import { selectFavArr } from '../../redux/favouriteSelector';
import './favouriteList.scss';

const FavouriteList = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavArr);

  useEffect(() => {}, [favourites]);

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
      {favourites !== null && favourites.length > 0 ? (
        <ul className="ctlgList">
          {favourites.map(data => {
            const addressParts = data.address
              .split(', ')
              .filter(part => !part.includes('Example'));
            return (
              <li className="ctlgEl" key={uuidv4()}>
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
      ) : (
        <div className="emptyBox">
          <h2 className="emptyFav">
            You haven't chosen your favorite car yet <Cart className="cart" />
          </h2>
        </div>
      )}
      {isOpened && <Modal data={data} onClose={() => onToggleModal(null)} />}
    </>
  );
};

export default FavouriteList;
