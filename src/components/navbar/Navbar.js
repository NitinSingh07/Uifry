import React from "react";

const Header = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
        aria-label="Global"
      >
        <a
          className="sm:order-1 flex-none text-3xl font-bold"
          href="/home"
          style={{ marginLeft: "100px" }}
        >
          🔥uifry
        </a>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-alignment"
            aria-controls="navbar-alignment"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-xl font-medium hover:text-orange-500 border-gray-200 bg-black text-white shadow-sm disabled:opacity-50 disabled:pointer-events-none"
            style={{ marginRight: "100px" }}
          >
            Download
          </button>
        </div>
        <div
          id="navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <a className="font-medium text-orange-500 text-xl" href="/home">
              Home
            </a>
            <a
              className="font-medium text-gray-600 hover:text-orange-500 text-xl"
              href="/aboutus"
            >
              Abouts Us
            </a>
            <a
              className="font-medium text-gray-600 hover:text-orange-500 text-xl"
              href="/pricing"
            >
              Pricing
            </a>
            <a
              className="font-medium text-gray-600 hover:text-orange-500 text-xl"
              href="/features"
            >
              Features
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
