import { useEffect } from "react";
import "./modal.scss";
import SpanMap from "../../funcs/spanFunc";

const Modal = ({ data, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const addressParts = data.address
    .split(", ")
    .filter((part) => !part.includes("Example"));
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
            {addressParts.map((part, index) => (
              <span key={index} className="addressPart">
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
          <div>
            {SpanMap(...data.accessories)}
            {SpanMap(...data.functionalities)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
