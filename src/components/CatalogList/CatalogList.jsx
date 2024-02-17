import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./catalog.scss";
import Modal from "../Modal/Modal";

const CatalogList = ({ cars }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [data, setData] = useState("");

  const onToggleModal = (modalData) => {
    setIsOpened(!isOpened);
    setData(modalData);
  };

  return (
    <>
      <ul className="ctlgList">
        {cars &&
          cars.map((data) => {
            const addressParts = data.address
              .split(", ")
              .filter((part) => !part.includes("Example"));
            return (
              <li className="ctlgEl" key={uuidv4()}>
                <div className="imgBox">
                  <img
                    src={data.img}
                    alt={`${data.make} ${data.model}`}
                    className="carImage"
                  />
                </div>
                <div className="titleBox">
                  <p className="carName">
                    <span className="make">{data.make} </span>{" "}
                    {data.model && <span className="model">{data.model}</span>},{" "}
                    <span className="make">{data.year} </span>
                  </p>
                  <span className="make">{data.rentalPrice} </span>

                  <p className="carAddress">
                    {addressParts.map((part, index) => (
                      <span key={index} className="addressPart">
                        {part}
                      </span>
                    ))}
                    <span className="addressPart">{data.rentalCompany}</span>
                    <span className="addressPart">{data.type}</span>
                    <span className="addressPart">{data.model}</span>
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
