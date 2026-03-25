import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import { FaDownload, FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import formatNumber from "../Utils/Utils";
import toast from "react-hot-toast";
import AppDataChart from "../Components/AppDataChart";
import FallbackSpinner from "../Components/FallbackSpinner";
import notFound from "../assets/App-Error.png";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => String(a.id) === id);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (!app) return;

    const existing = JSON.parse(localStorage.getItem("install")) || [];
    const found = existing.some((a) => a.id === app.id);

    setIsInstalled(found);
  }, [app]);

  if (!app) {
    return (
      <div className=" gap-1 min-h-screen  flex flex-col items-center justify-center">
        <img src={notFound} alt="Not Found indicator" className="p-10" />
        <h1 className="text-3xl font-bold text-[#c76b29]">App Not Found</h1>
        <p className="text-gray-500 my-4 px-10 text-center">
          The app you are looking for does not exist or has been removed..
        </p>

        <Link
          to={"/"}
          className="rounded-md bg-[#9651ec] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
      </div>
    );
  }

  if (loading) return <FallbackSpinner />;
  const {
    title,
    image,
    ratingAvg,
    downloads,
    companyName,
    reviews,
    size,
    description,
  } = app;

  const handleInstaller = () => {
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate) {
        toast.error("Already Installed.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            marginTop: "50px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
        setIsInstalled(true);
        return;
      }
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("install", JSON.stringify(updatedList));
    setIsInstalled(true);

    toast.success(`${title} installed successfully! `, {
      style: {
        border: "1px solid #4BB543",
        marginTop: "50px",
      },
    });
  };

  return (
    <div className="sm:w-11/12 mx-auto ">
      <div className="card mt-20 flex flex-col sm:flex-row ">
        <figure className="sm:bg-blue-100 sm:h-80 sm:w-96 sm:m-5 rounded-xl overflow-hidden transition ease-in-out sm:border border-[#0000001f]">
          <img className="h-full object-contain" src={image} alt="AppIcon" />
        </figure>

        <div className="sm:w-full mb-10 space-y-4 p-8 border border-[#0000001f]">
          <h2 className="card-title">{title}</h2>
          <p className="border-b border-[#0000001f] pb-4">
            Developed by <span className="font-semibold">{companyName}</span>
          </p>

          <div className="grid grid-cols-3 md:h-25 lg:w-[70%] gap-2 sm:mb-15">
            <div className="text-[#00D390] flex flex-col gap-2 justify-center items-center border rounded-md  ">
              <FaDownload className="w-20 h-10" />
              <p className="text-black text-center">Downloads</p>
              <span className="font-bold text-xl md:text-2xl text-black">
                {formatNumber(downloads)}
              </span>
            </div>
            <div className="text-[#ffd000] flex flex-col gap-2 justify-center items-center border rounded-md ">
              <FaStar className="w-20 h-10" />
              <p className="text-black text-center">Average Ratings</p>
              <span className="font-bold text-xl md:text-2xl text-black">
                {ratingAvg}
              </span>
            </div>
            <div className="text-[#632EE3] flex flex-col gap-2 items-center justify-center border rounded-md p-3">
              <MdReviews className="w-20 h-10" />
              <p className="text-black text-center">Total Reviews</p>
              <span className="font-bold text-xl md:text-2xl text-black">
                {formatNumber(reviews)}
              </span>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-start">
            <button
              onClick={handleInstaller}
              disabled={isInstalled}
              className={`relative overflow-hidden group px-8 py-3 rounded-md font-semibold text-white transition-all duration-300 mt-7 
                ${
                  isInstalled
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-linear-to-r from-[#00D390] to-[#00BFA5] hover:shadow-[0_0_20px_#00D390aa]"
                } shadow-lg`}
            >
              <span className="relative z-10 flex items-center gap-1">
                {isInstalled ? "Installed" : "Install Now"}
                {!isInstalled && (
                  <span className="text-sm text-[#e6fff9] opacity-90">
                    ({size} MB)
                  </span>
                )}
              </span>

              {!isInstalled && (
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <AppDataChart app={app} />
      </div>
      <div className="w-11/12 mx-auto mb-10">
        <h1 className="font-bold text-2xl mb-5">Description</h1>
        <p className="whitespace-pre-line text-[#00000099]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
