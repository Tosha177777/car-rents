const SpanMap = (...args) => {
  return args.map((arg, index) => (
    <span key={index} className="addressPart">
      {arg}
    </span>
  ));
};

export default SpanMap;
