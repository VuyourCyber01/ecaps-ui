import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-8">
          <span className="text-9xl font-bold text-white">404</span>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-white">Page Not Found</h1>
        <p className="mb-8 text-lg text-white">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block rounded-md bg-white px-6 py-3 text-lg font-semibold text-purple-800 shadow-md transition-colors duration-300 hover:bg-purple-100"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
