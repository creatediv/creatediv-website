import React from "react"
import heroImage from "../../assets/images/hero-image.png"
import { Link } from "gatsby"
class Banner extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          objectFit: "cover",
          height: "100vh",
          maxHeight: "1000px",
          top: 0,
          position: "absolute",
          left: 0,
          overflow: "hidden",
        }}
      >
        <div
          class="hero-image w-full h-full"
          style={{
            width: "100%",
            position: "absolute",
            left: 0,
            zIndex: -10,
          }}
        ></div>
        {/* <img
          src={hero}
          style={{ width: "100%", position: "absolute", left: 0, zIndex: -10 }}
        /> */}
        <div
          class="flex w-full h-full justify-center place-items-start max-w-6xl"
          style={{ marginTop: "216px" }}
        >
          <div class="flex flex-col-reverse xl:flex-row flex-wrap w-full justify-center place-items-center">
            <div class="flex flex-col w-11/12 xl:w-6/12 mt-10 justify-center">
              <div className="flex flex-col place-items-center">
                <div className="flex font-extrabold text-4xl md:text-6xl w-full justify-center">
                  <span class="flex">Maximize your</span>
                </div>
                <div className="flex font-extrabold text-4xl md:text-6xl w-full justify-center">
                  <span class="flex">online potential</span>
                </div>
              </div>
              <div className="flex flex-col place-items-center">
                {/* <div className="flex">Refine your</div> */}
                {/* <ul className="flex flex-col ml-8">
                  <li>Branding</li>
                  <li>Marketing</li>
                  <li>SEO</li>
                  <li>Strategy</li>
                </ul> */}
              </div>
              <div class="flex justify-center mt-10">
                <Link
                  to="/contact"
                  className="create flex px-5 py-3 border-black border-2 border-solid rounded-lg hover:bg-black hover:text-white duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div class="flex w-8/12 xl:w-6/12 -mt-16 justify-left">
              <img
                className=" h-64 xl:h-full"
                src={heroImage}
                style={{
                  width: "100%",
                  //   height: "60vh",
                  maxHeight: "600px",
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  borderRadius: 30,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
