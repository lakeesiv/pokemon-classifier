import React from "react";
import Image from "next/image";

interface Props {
  selectedImage: File | undefined;
  setSelectedImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const FileDropzone = ({ selectedImage, setSelectedImage }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {selectedImage && (
        <div className="flex w-full flex-col items-center justify-center">
          <Image
            alt="not found"
            width="400"
            height="400"
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button
            className="text-primary-foreground hover:bg-primary/90 h-9
			rounded-md bg-gray-800 px-3 transition-colors hover:bg-gray-700
		  "
            onClick={() => setSelectedImage(undefined)}
          >
            Remove
          </button>
        </div>
      )}
      {!selectedImage && (
        <label className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              aria-hidden="true"
              className="mb-3 h-10 w-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                console.log(e.target.files[0]);
                setSelectedImage(e.target.files[0]);
              }
            }}
          />
        </label>
      )}
    </div>
  );
};

export default FileDropzone;
