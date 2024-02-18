import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

import './modal.scss';
import SpanMap from '../../funcs/spanFunc';
import RentalMap from 'funcs/rentalConditions';
import { ReactComponent as Cross } from 'icons/cross.svg';

const Modal = ({ data, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const addressParts = data.address
    .split(', ')
    .filter(part => !part.includes('Example'));
  return (
    <div className="overlay" onClick={handleClick}>
      <div className="modal">
        <div className="imgBox">
          <img src={data.img} alt={data.model} className="modalImg" />
        </div>
        <div className="titleBox titleModal">
          <h3 className="carName">
            <span className="make">{data.make} </span>
            {data.model && <span className="model">{data.model}</span>},
            <span className="make">{data.year} </span>
          </h3>

          <p className="carAddress plusModal">
            {addressParts.map(part => (
              <span key={uuidv4()} className="addressPart">
                {part}
              </span>
            ))}
            {SpanMap(
              `Id: ${data.id}`,
              `Year: ${data.year}`,
              `Type: ${data.type}`,
              `Fuel Consumption: ${data.fuelConsumption}`,
              `Engine Size: ${data.engineSize}`
            )}
          </p>
          <p className="description">{data.description}</p>
          <h2 className="accessor">Accessories and functionalities:</h2>
          <div className="accessoriesFunctional">
            {SpanMap(...data.accessories)}
            {SpanMap(...data.functionalities)}
          </div>
          <h2 className="accessor">Rental Conditions:</h2>
          <div className="rentalBox">
            {RentalMap(data.rentalConditions)}
            <span key={uuidv4()} className="rentalConds">
              Mileage:
              <span key={uuidv4()} className="bluePart">
                {' '}
                {Number(data.mileage).toLocaleString('en-US', {
                  useGrouping: true,
                })}
              </span>
            </span>
            <span key={uuidv4()} className="rentalConds">
              Price: <span className="bluePart">{data.rentalPrice}</span>{' '}
            </span>
          </div>
        </div>
        <a href="tel:+380730000000" className="rentalButton">
          Rental car
        </a>
        <button className="crossBtn">
          <Cross className="cross" onClick={handleClick} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
