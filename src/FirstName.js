import React from "react";
const FirstName = props => {
  const [firstname, setFirstname] = React.useState("");
  const [error, setError] = React.useState("");
  const show = () => {
    console.log(fnref.current.value);
  };
  const handleFirstname = e => {
    if (e.target.value === null || e.target.value === "") {
      setError("Please Enter the First Name");
    } else {
      var regExp = /^[A-z]{5,10}$/;
      if (!regExp.test(e.target.value)) {
        setError("Accepts Alphabets, space & Min 5 to Max 30 Char");
      } else {
        setError("");
      }
    }
    setFirstname(e.target.value);
  };
  return (
    <div className="betterview">
      <input
        type="text"
        id="d1"
        value={firstname}
        onChange={handleFirstname}
        onBlur={handleFirstname}
        className={error ? "errorBorder" : ""}
      />
      <div className={error ? "errorText" : ""}>{error}</div>
      <button onClick={show}>Show</button>
    </div>
  );
};
export default FirstName;
