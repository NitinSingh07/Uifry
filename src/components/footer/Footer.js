import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-white w-full" style={{ marginTop: "100px" }}>
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div
            className="col-span-full lg:col-span-1"
            style={{ marginLeft: "100px" }}
          >
            <a
              className="flex-none text-3xl font-bold text-black mb-3"
              href="#"
              aria-label="Brand"
            >
              🔥uifry
            </a>

            <div className="mt-2">
              <p>
                <a
                  className="inline-flex  text-sm font-semibold text-gray-800 hover:text-orange-500"
                  href="#"
                >
                  📧Help@Frybix.com
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-y-2 text-gray-800 hover:text-orange-500 text-sm font-semibold"
                  href="#"
                >
                  📞+12 2345 567 890
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-bold text-2xl text-black">Links</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-800 hover:text-gray-600"
                  href="#"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-800 hover:text-gray-600"
                  href="#"
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-800 hover:text-gray-600"
                  href="#"
                >
                  Bookings
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-800 hover:text-gray-600"
                  href="#"
                >
                  Blog
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-1">
            <h4 className="font-bold text-2xl text-black">Legal</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-800 hover:text-gray-600"
                  href="#"
                >
                  Terms Of Use
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-800 hover:text-gray-600"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-800 hover:text-gray-600"
                  href="#"
                >
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}

          <div className="col-span-2" style={{ marginRight: "100px" }}>
            <h4 className="font-bold text-2xl text-black">NewsLetter</h4>
            <p className="mt-2">
              <a
                className="inline-flex gap-x-2 text-gray-800 hover:text-gray-600"
                href="#"
              >
                Stay Up To Date
              </a>
            </p>{" "}
            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 p-2">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full text-sm disabled:pointer-events-none bg-white text-black placeholder-gray-600"
                    placeholder="Your email"
                  />
                </div>
                <a
                  className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-none bg-black text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
            </form>
          </div>
        </div>
        {/* End Grid */}
        <hr className="my-2 w-1/2 mx-auto border-t border-gray-400" />
        <div className="mt-5 flex justify-center">
          <p className="text-sm font-semibold text-gray-800">
            Copyright 2022 Uifry.com All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
