import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import formatNumber from "../Utils/Utils";
import { toast } from "react-hot-toast";
import { loadInstallation } from "../Utils/LocalStorage";
import notFoundImg from "../assets/App-Error.png";
import { GrStorage } from "react-icons/gr";
import { FcRating } from "react-icons/fc";

const Installations = () => {
  const [install, setInstall] = useState(() => loadInstallation());
  const [sortOrder, setSortOrder] = useState("none");

  let sortedItem = [...install];

  if (sortOrder === "asc") {
    sortedItem.sort((a, b) => a.downloads - b.downloads);
  } else if (sortOrder === "dsc") {
    sortedItem.sort((a, b) => b.downloads - a.downloads);
  }

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    let updatedList = existingList.filter((a) => a.id !== id);

    setInstall(updatedList);
    localStorage.setItem("install", JSON.stringify(updatedList));

    toast.success("App Uninstalled Successfully!", {
      style: {
        marginTop: "50px",
      },
    });
  };

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl sm:text-5xl font-bold">
          My <span className="text-gray-300">(Your)</span> Installed Apps
        </h1>
        <p className="text-xl py-5 text-[#627382] px-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className=" w-11/12 mx-auto pb-5 flex flex-col sm:flex-row gap-6 justify-between items-center  ">
        <h1 className="font-bold text-xl">({install.length}) Apps Found </h1>

        <div className="form-control w-full max-w-xs">
          <select
            className="select select-bordered "
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Download</option>
            <option value="asc">Low - High</option>
            <option value="dsc">High - Low</option>
          </select>
        </div>
      </div>

      {sortedItem.length === 0 ? (
        <div className="text-2xl font-semibold text-gray-500 py-10 flex flex-col justify-center items-center">
          <img className="w-60" src={notFoundImg} alt="" />
          <h2>No Apps Installed</h2>
        </div>
      ) : (
        <section className="space-y-3 pb-5 w-11/12 mx-auto ">
          {sortedItem.map((a) => (
            <div
              key={a.id}
              className="card card-side shadow-sm hover:scale-101 transition grid grid-cols-12 gap-5"
            >
              <div className="  h-full w-20 sm:h-30 sm:w-30 rounded-md object-contain flex items-center justify-center col-span-2 sm:col-span-1 ">
                <img src={a.image} alt={a.title} className="  w-full" />
              </div>
              <div className=" flex flex-col justify-center h-full col-span-7 sm:col-span-9 pl-8 sm:pl-18 xl:pl-0 ">
                <h2 className="card-title">{a.title}</h2>
                <div className="flex sm:gap-4 flex-col sm:flex-row ">
                  <div className="flex gap-4">
                    <div className="flex font-semibold text-[#00D390] items-center">
                      <MdOutlineFileDownload />
                      <span className="pl-1">{formatNumber(a.downloads)}</span>
                    </div>
                    <div className="flex font-semibold text-[#FF8811] items-center">
                      <FcRating />
                      <span className="pl-1">{a.ratingAvg}</span>
                    </div>
                  </div>
                  <div className="flex font-semibold text-[#627382] items-center">
                    <GrStorage />
                    <span className="pl-1">{a.size} MB</span>
                  </div>
                </div>
              </div>
              <div className="card-actions flex justify-end items-center pr-2 h-full col-span-3 sm:col-span-2">
                <button
                  onClick={() => handleRemove(a.id)}
                  className="btn bg-[#00D390] text-white "
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Installations;
