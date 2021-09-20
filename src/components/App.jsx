import React, { useState } from "react";
function App() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  });
  function handleChange(event) {
    const { value, name } = event.target;

    setfullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          vlaue={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
