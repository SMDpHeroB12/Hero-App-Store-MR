import playStoreImg from "../assets/playStore.svg";
import appStoreImg from "../assets/appStore.svg";
import heroImg from "../assets/hero.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className=" mx-auto pt-20">
      <div className=" text-center space-y-5">
        <h1 className="font-bold text-4xl sm:text-7xl">
          We Build <br />
          <span className="font-black bg-linear-to-bl from-[#9F62F2] to-[#632EE3] text-transparent bg-clip-text mr-3">
            Productive
          </span>
          Apps
        </h1>
        <p className="sm:text-2xl text-[#627382] px-5">
          At HERO AppStore , we craft innovative apps designed to make everyday
          life simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="space-x-4 my-10">
          <Link to="https://play.google.com/" target="_blank">
            <button className="btn py-7 px-4 w-40">
              <img src={playStoreImg} alt="PlayStore Icon" /> Google Play
            </button>
          </Link>
          <Link to="https://www.apple.com/app-store/" target="_blank">
            <button className="btn py-7 px-4 w-40">
              <img src={appStoreImg} alt="AppStore Icon" /> App Store
            </button>
          </Link>
        </div>
        <div className="sm:w-[50%] px-5 mx-auto flex flex-col justify-center">
          <img src={heroImg} alt="Hero Image" />
        </div>
      </div>
      <div className="w-full md:h-[410px] bg-linear-to-bl from-[#9F62F2] to-[#632EE3] py-20">
        <div className="w-11/12 mx-auto text-center text-white">
          <h1 className="font-bold text-2xl md:text-5xl pb-10">
            Trusted by Millions, Built for You
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-4 border-b border-[#ffffff50] pb-3 sm:border-0">
              <p>Total Downloads</p>
              <h1 className="font-extrabold text-6xl">29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div className="space-y-4 border-b border-[#ffffff50] pb-3 sm:border-0">
              <p>Total Reviews</p>
              <h1 className="font-extrabold text-6xl">906K</h1>
              <p>46% more than last month</p>
            </div>
            <div className="space-y-4 border-b border-[#ffffff50] pb-3 sm:border-0 sm:col-span-2 md:col-span-1">
              <p>Active Apps</p>
              <h1 className="font-extrabold text-6xl">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
