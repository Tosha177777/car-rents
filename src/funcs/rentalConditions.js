import { v4 as uuidv4 } from 'uuid';

const RentalMap = (...args) => {
  return args.map(arg => (
    <>
      {arg.split('\n').map(part => {
        if (part.includes('Minimum age:')) {
          const age = part.match(/(?<=Minimum age:\s)\d+/);
          if (age) {
            return (
              <span key={uuidv4()} className="rentalConds">
                Minimum age:{' '}
                <span key={uuidv4()} className="bluePart">
                  {age[0]}
                </span>
              </span>
            );
          }
        }
        return (
          <span key={uuidv4()} className="rentalConds">
            {part}
          </span>
        );
      })}
    </>
  ));
};
export default RentalMap;
