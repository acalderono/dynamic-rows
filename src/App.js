import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState([]);

  const handleAddRow = () => {
    const item = { name: "", mobile: "" };
    const rows = [...state, item];
    setState(rows);
    console.log(state);
  };

  const handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...state];
    rows[idx] = {
      [name]: value
    };
    setState(rows);
  };

  const handleRemoveSpecificRow = idx => () => {
    const rows = [...state];
    rows.splice(idx, 1);
    setState(rows);
  };

  const handleRemoveRow = () => {
    const rows = state.slice(0, -1);
    setState(rows);
  };

  return (
    <section>
      <div>
        <table>
          <thead>
            <tr>
              <th className="text-center"> # </th>
              <th className="text-center"> Name </th>
              <th className="text-center"> Mobile </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {state.map((item, idx) => (
              <tr id="addr0" key={idx}>
                <td>{idx}</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={state[idx].name}
                    onChange={handleChange(idx)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="mobile"
                    value={state[idx].mobile}
                    onChange={handleChange(idx)}
                    className="form-control"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={handleRemoveSpecificRow(idx)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddRow} className="btn btn-primary">
          Add Row
        </button>
        <button
          onClick={handleRemoveRow}
          className="btn btn-danger float-right"
        >
          Delete Last Row
        </button>
      </div>
    </section>
  );
};

export default App;
