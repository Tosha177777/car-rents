import { v4 as uuidv4 } from 'uuid';

const SpanMap = (...args) => {
  return args.map(arg => (
    <span key={uuidv4()} className="addressPart">
      {arg}
    </span>
  ));
};

export default SpanMap;
