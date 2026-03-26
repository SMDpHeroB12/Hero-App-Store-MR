import { FaDownload } from "react-icons/fa";
import { Link } from "react-router";
import formatNumber from "../Utils/Utils";
import { FcRating } from "react-icons/fc";

const AppCard = ({ app }) => {
  const { title, image, ratingAvg, downloads, id } = app;
  return (
    <div className="border h-90 border-gray-200 hover:scale-102 transition bg-white rounded-md p-3 shadow-sm hover:shadow-md">
      <Link
        to={`/app/${id}`}
        className="card h-full bg-base-100 flex flex-col justify-between"
      >
        <figure className=" bg-blue-100 mb-4 h-40 sm:h-60 rounded-xl overflow-hidden transition ease-in-out">
          <img className=" object-contain" src={image} alt="AppIcon" />
        </figure>
        <div className="space-y-4 ">
          <h2 className="card-title justify-center sm:justify-start">
            {title}
          </h2>

          <div className=" flex gap-2 flex-col sm:flex-row sm:justify-between  ">
            <button className="btn sm:w-30 text-[#00D390] ">
              <FaDownload />
              {formatNumber(downloads)}
            </button>
            <button className="btn sm:w-20 bg-[#FFF0E1]">
              <FcRating />
              {formatNumber(ratingAvg)}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
