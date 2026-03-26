const LoadingSpinner = ({ count = 8 }) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="card p-4 h-96 shadow-sm justify-between">
            {/* IMAGE SKELETON */}
            <div className="bg-blue-100 mb-4 sm:mb-0 h-40 sm:h-60 rounded-xl overflow-hidden">
              <div className="skeleton w-full h-full"></div>
            </div>

            {/* TITLE */}
            <div className="space-y-2">
              <div className="flex items-center sm:items-start flex-col gap-2">
                <div className="skeleton h-6 w-3/4 sm:mb-2"></div>
                <div className="skeleton h-6 w-3/4 sm:hidden"></div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-2 flex-col sm:flex-row sm:justify-between">
                <div className="skeleton h-10 sm:w-30 w-full rounded-md"></div>
                <div className="skeleton h-10 sm:w-20 w-full rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;
