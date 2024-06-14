"use client";
import { successToast } from "@/config/toast";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

const Folder = () => {
  const [data, setData] = useState({
    noaPath: "",
    noaTemplate: "",
    ntpPath: "",
    ntpTemplate: "",
  });

  useEffect(() => {
    const noaFolderData = JSON.parse(localStorage.getItem("noaFolderData"));
    setData(noaFolderData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", data);
    localStorage.setItem("noaFolderData", JSON.stringify(data));
    successToast("Folder directories has been updated");
  };

  return (
    <div className="flex w-screen p-20 justify-center">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="justify-center flex flex-col gap-3 mt-10 w-auto rounded-xl shadow-sm p-8 min-w-[50rem] bg-zinc-50"
      >
        {/* AWARD */}
        <p className="primary-text">Where to save Award?</p>
        <input
          name="noaPath"
          value={data?.noaPath}
          onChange={handleChange}
          // onPaste={handlePaste}
          className="custom-input"
        ></input>

        <p className="primary-text mt-4">Where to find the Award Template?</p>
        <input
          name="noaTemplate"
          value={data?.noaTemplate}
          onChange={handleChange}
          // onPaste={handlePaste}
          className="custom-input"
        ></input>

        <p className="primary-text mt-10">Where to save NTP?</p>
        <input
          name="ntpPath"
          value={data?.ntpPath}
          onChange={handleChange}
          // onPaste={handlePaste}
          className="custom-input"
        ></input>

        <p className="primary-text mt-4">Where to find the NTP Template?</p>
        <input
          name="ntpTemplate"
          value={data?.ntpTemplate}
          onChange={handleChange}
          // onPaste={handlePaste}
          className="custom-input"
        ></input>

        <button
          type="submit"
          className="btn btn-neutral text-xs w-32 ml-auto mr-0"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Folder;
