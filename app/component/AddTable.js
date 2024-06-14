"use client";
import React, { useState } from "react";

const AddTable = ({inputArr, setInputArr}) => {
  // State to manage input data array
  // const [inputArr, setInputArr] = useState([]);

  // State to manage form input data
  const [inputData, setInputData] = useState({
    contractID: "",
    projectName: "",
  });

  // Handle changes in form inputs
  const changehandle = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  // Destructure input data for easy access
  const { contractID, projectName } = inputData;

  // Handle adding new data to the input array
  const handleAdd = () => {
    setInputArr([
      ...inputArr,
      {
        contractID,
        projectName,
      },
    ]);

    console.log(inputData, "input data what we Enter");

    // Reset input data
    setInputData({ contractID: "", projectName: "" });
  };

  // Handle deleting an item from the input array
  const handleDelete = (i) => {
    let newdataArr = [...inputArr];
    newdataArr.splice(i, 1);
    setInputArr(newdataArr);
  };

  return (
    <div className="flex justify-center flex-col gap-5 max-w-[60rem] mx-auto">
      <span className="gap-5 flex mx-auto mt-10">
        <input
          type="text"
          autoComplete="off"
          className="custom-input"
          name="contractID"
          value={inputData.contractID}
          onChange={changehandle}
          placeholder="Contract ID"
        />
        <input
          type="text"
          autoComplete="off"
          className="custom-input w-[40rem]"
          name="projectName"
          value={inputData.projectName}
          onChange={changehandle}
          placeholder="Project Name"
        />
        <button
          onClick={handleAdd}
          className="btn btn-sm btn-neutral text-xs w-40"
        >
          Add
        </button>
        <br />
      </span>

      <div className="flex flex-col mx-auto border border-zinc-300 rounded-lg mt-5">
        <table className="table table-zebra">
          <thead>
            <tr className="text-xs text-zinc-500">
              <th>Contract ID </th>
              <th>Project Name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {inputArr.length < 1 ? (
              <tr>
                <td colSpan={3} className="text-red-500 text-xs"> Please enter atleast One Contract ID and Project Name!</td>
              </tr>
            ) : (
              inputArr.map((info, ind) => (
                <tr key={ind}>
                  <td className="text-xs">{info.contractID}</td>
                  <td className="text-xs text-zinc-600">{info.projectName}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(ind)}
                      className="btn btn-error btn-sm btn-outline text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddTable;
