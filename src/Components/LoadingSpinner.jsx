const LoadingSpinner = ({ count = 8 }) => {
  return (
    <div className="w-11/12 mx-auto pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="flex  flex-col gap-4 bg-base-200 p-2.5 rounded-xl"
          >
            <div className="skeleton h-56 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;
