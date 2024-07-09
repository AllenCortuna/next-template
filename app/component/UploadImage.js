"use client";
import { errorToast, successToast } from "@/config/toast";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Dropzone from "react-dropzone";
import Tesseract from "tesseract.js";
import * as XLSX from 'xlsx';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      setLoading(true);
      try {
        // Perform OCR using Tesseract.js
        const { data: { text } } = await Tesseract.recognize(
          file,
          'eng',
          {
            logger: (m) => console.log(m),
          }
        );

        console.log("Extracted Text:", text);

        // Convert text to Excel format
        const worksheet = XLSX.utils.aoa_to_sheet([[text]]);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

        // Create a Blob from the buffer
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

        // Create a link element
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'extracted_text.xlsx';

        // Append to the document and trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        successToast("Text extracted and converted to Excel successfully!");
      } catch (error) {
        console.log("ERROR: ", error);
        errorToast("Failed to extract text. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      errorToast("Please upload a file before submitting.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-screen p-10 items-center"
    >
      <ToastContainer />
      <Dropzone
        onDrop={handleFileUpload}
        accept={{
          "image/*": [".jpeg", ".jpg", ".png", ".gif"],
        }}
        maxFiles={1}
        className="border-2 border-dashed border-gray-600 rounded-md cursor-pointer"
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="flex flex-col items-center p-10 border-2 border-dashed border-zinc-500 rounded-md cursor-pointer"
          >
            <input {...getInputProps()} />
            <span className="text-gray-400 text-xs w-full text-center m-auto">
              {file ? (
                <span className="text-xs flex justify-center text-center gap-2">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt="Selected Image"
                    width={100}
                    height={100}
                  />
                  <p className="my-auto">{file.name}</p>
                </span>
              ) : (
                "Drag and drop, or Click to select a file"
              )}
            </span>
          </div>
        )}
      </Dropzone>
      <button
        type="submit"
        className="btn btn-primary px-10 mt-8 text-xs rounded-full text-white"
        disabled={!file || loading}
      >
        {loading ? "Extracting..." : "Submit"}
      </button>
    </form>
  );
};

export default UploadImage;
