import { useParams } from "react-router";
import { useState } from "react";
import useApps from "../Hooks/useApps";
import { FaDownload, FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import formatNumber from "../Utils/Utils";
import toast from "react-hot-toast";
import AppDataChart from "../Components/AppDataChart";
import FallbackSpinner from "../Components/FallbackSpinner";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => String(a.id) === id);
  const [isInstalled, setIsInstalled] = useState(false);

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
          <img className="w-full object-contain" src={image} alt="AppIcon" />
        </figure>

        <div className="sm:w-full mb-10 space-y-4 p-8 border border-[#0000001f]">
          <h2 className="card-title">{title}</h2>
          <p className="border-b border-[#0000001f] pb-4">
            Developed by <span className="font-semibold">{companyName}</span>
          </p>

          <div className="grid md:grid-cols-3 h-screen md:h-25 lg:w-[70%]">
            <div className="text-[#00D390] flex flex-col gap-2 justify-center items-center">
              <FaDownload className="w-20 h-10" />
              <p className="text-black">Downloads</p>
              <span className="font-bold text-3xl text-black">
                {formatNumber(downloads)}
              </span>
            </div>
            <div className="text-[#ffd000] flex flex-col gap-2 justify-center items-center">
              <FaStar className="w-20 h-10" />
              <p className="text-black ">Average Ratings</p>
              <span className="font-bold text-3xl text-black">{ratingAvg}</span>
            </div>
            <div className="text-[#632EE3] flex flex-col gap-2 items-center justify-center">
              <MdReviews className="w-20 h-10" />
              <p className="text-text-black">Total Reviews</p>
              <span className="font-bold text-3xl text-black">
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
