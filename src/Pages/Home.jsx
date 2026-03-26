import { Link } from "react-router";
import Banner from "../Components/Banner";
import AppCard from "../Components/AppCard";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../Components/LoadingSpinner";

const Home = () => {
  const { apps, loading } = useApps();

  // const trendingApps = apps.slice(0, 8);
  const trendingApps = [...apps]
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 8);

  return (
    <div className=" ">
      <Banner />
      <div className="bg-[#f5f5f5] pt-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold"> Trending Apps</h1>
          <p className="text-xl py-10 text-[#627382] px-5">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="w-11/12 mx-auto text-center pb-10 ">
          {loading ? (
            <LoadingSpinner count="8" />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {trendingApps.map((app) => (
                <div key={app.id} className="">
                  <AppCard app={app} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center pb-10">
          <Link
            to="/apps"
            className="btn w-40 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
          >
            <span>Show All</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
