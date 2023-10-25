"use client";

import { useState } from "react";

const page = () => {
  const [data, setdata] = useState([]);

  const handleSetCookie = () => {
    fetch("http://localhost:3000/api/setcookie")
      .then((response) => {
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error(
            `Network response was not OK. Status: ${response.status}`
          );
        }

        // Parse the JSON response
        return response.json();
      })
      .then((data) => {
        // Do something with the parsed data
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };

  const handleheders = () => {
    (async () => {
      const res = await fetch(
        "http://localhost:3000/api/headersModifications",
        {
          headers: {
            Authorization: "ABC-123",
          },
        }
      );

      const Data = await res.json();
      setdata(Data);
    })();
  };

  return (
    <div className=" flex justify-center items-center h-[100vh]  from-gray-800 via-greeen-300 to-blue-500 bg-gradient-to-br    ">
      <div className=" mt-[100px]   ">
        <button
          className="inline-flex items-center justify-center rounded-full bg-black py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          onClick={handleSetCookie}
        >
          Set Cookie
        </button>

        <button
          className="inline-flex items-center justify-center rounded-full  bg-purple-800 py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          onClick={handleheders}
        >
          Send Request With Auth header
        </button>

        <div
          id="toast-default"
          className="  ml-10 mt-9   flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
              />
            </svg>
            <span className="sr-only">{JSON.stringify(data)}</span>
          </div>
          <div className="ml-3   p-2 text-sm  font-bold  ">
            {JSON.stringify(data)}
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-default"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>

            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
