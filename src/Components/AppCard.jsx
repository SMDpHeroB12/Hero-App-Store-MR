import { FaDownload } from "react-icons/fa";
import { Link } from "react-router";
import formatNumber from "../Utils/Utils";

const AppCard = ({ app }) => {
  const { title, image, ratingAvg, downloads, id } = app;
  return (
    <div className="">
      <Link to={`/app/${id}`} className="card bg-base-100  ">
        <figure className=" bg-blue-100 h-60 rounded-xl overflow-hidden transition ease-in-out">
          <img className=" object-contain" src={image} alt="AppIcon" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-between">
            <button className="btn text-[#00D390] text-left">
              <FaDownload />
              {formatNumber(downloads)}
            </button>
            <button className="btn w-15 bg-[#FFF0E1]">
              {formatNumber(ratingAvg)}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
