import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative">
        {/* <img
          src="./img/Star 1.png"
          alt="Star"
          className="absolute right-10 top-8"
          style={{ marginRight: "10px", marginTop: "4px" }}
        /> */}
        <img
          src="./img/Star 3.png"
          alt="Star"
          className="absolute left-4 top-10"
          style={{ marginLeft: "4px", marginTop: "4px" }}
        />
      </div>
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "100vh" }} // Ensures the div takes full viewport height
      >
        <div className="flex flex-col items-start gap-10 mt-20">
          <div className="flex w-full justify-center">
            <div className="w-1/2 text-2xl font-light relative ml-40">
              <img
                src="./img/Group 35896.png"
                alt=""
                style={{
                  zIndex: "-1",
                  marginTop: "-150px",
                }}
              />
              <img
                src="./img/make.png"
                alt="Make the Best"
                style={{ marginTop: "-250px" }} // Adjusted marginTop
              />
              <p className="pt-5 whitespace-nowrap">
                Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque
                Aliquet
              </p>
              <p className="mb-5">
                Faucibus Tincidunt Eu Adipiscing Soclis Arcu Lorem Porttitor.
              </p>

              <img
                src="./img/Group 5.png"
                alt=""
                style={{ marginBottom: "2px" }}
              />
              <img
                src="./img/Star 8.png"
                alt=""
                style={{ marginLeft: "100px", marginTop: "80px" }}
              />

              <img
                src="./img/Group 35924.png"
                alt=""
                style={{ marginBottom: "2px", marginTop: "-80px" }}
              />
            </div>
            <div className="w-1/2 relative ml-4">
              <img
                src="./img/iPhone-13-Pro-Front (1).png"
                alt="iPhone Front"
                className="absolute right-10"
                style={{
                  marginTop: "-100px",
                  right: "100px",
                  position: "relative",
                  zIndex: "3",
                }}
              />
              <img
                src="./img/iPhone-13-Pro-Front.png"
                alt="iPhone Front"
                className="absolute left-20"
                style={{
                  marginTop: "-650px",
                  left: "30px",
                  right: "00px", // Adjusted right property
                  position: "relative",
                  zIndex: "2",
                }}
              />
              <img
                src="./img/Frame 1.png"
                alt="Frame"
                className="absolute"
                style={{
                  marginTop: "-800px",
                  marginLeft: "20px",
                  position: "relative",
                  zIndex: "1",
                }}
              />
              <img
                src="./img/Group 35899.png"
                alt=""
                style={{
                  zIndex: "-1",
                  marginRight: "500px",
                  marginTop: "-800px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
