import { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import notFoundImg from "../assets/App-Error.png";

const Apps = () => {
  const { apps, loading } = useApps();

  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const term = search.trim().toLowerCase();

  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className="flex justify-center flex-col pt-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">Our All Applications</h1>
        <p className="text-xl py-10 text-[#627382] px-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="w-11/12 mx-auto pb-10 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          ({searchedApps.length}) Apps Found
        </h1>
        <label className="input flex items-center gap-2 border rounded-lg px-3 py-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => {
              const value = e.target.value;
              setSearch(value);

              setSearchLoading(true);

              setTimeout(() => {
                setSearchLoading(false);
              }, 1000);
            }}
            type="search"
            placeholder="Search Apps"
            className="outline-none flex-1"
          />
        </label>
      </div>

      <div className="w-11/12 mx-auto pb-10 text-center ">
        {loading || searchLoading ? (
          <LoadingSpinner count="30" />
        ) : searchedApps.length === 0 ? (
          <div className="text-2xl font-semibold text-gray-500 py-10 flex flex-col justify-center items-center">
            <img className="w-60" src={notFoundImg} alt="" />
            <h2>No Apps Found</h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchedApps.map((app) => (
              <div
                key={app.id}
                className="border border-gray-200 hover:scale-102 transition bg-white rounded-md p-5 shadow-sm hover:shadow-md"
              >
                <AppCard app={app} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
