import React from 'react';
import { shore } from './cconstants';
const Location = (props) => {
  const [selectedShore, setSelectedShore] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {}, []);
  const handleShore = (e) => {
    setSelectedShore(e.target.value);
  };
  const handleSelection = (e) => {
    if (e.target.value === null || e.target.value === '') {
      setError('Please select the location');
    } else {
      setError('');
    }
  };
  return (
    <div className="betterview">
      <input
        type="radio"
        name="shore"
        value="offshore"
        onChange={handleShore}
      />{' '}
      Offshore&nbsp;&nbsp;&nbsp;
      <input
        type="radio"
        name="shore"
        value="onshore"
        onChange={handleShore}
      />{' '}
      Onshore&nbsp;&nbsp;&nbsp;
      <br />
      <select onBlur={handleSelection}>
        <option disabled selected value="">
          Please select
        </option>
        {selectedShore &&
          shore[selectedShore].map((s) => {
            return <option>{s}</option>;
          })}
      </select>
      <div className="errorText">{error && <b>{error}</b>}</div>
    </div>
  );
};
export default Location;
