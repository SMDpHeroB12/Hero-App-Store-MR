import gifLoad from "../assets/loading.gif";
const FallbackSpinner = () => {
  return (
    <div className="w-11/12 h-screen mx-auto  flex justify-center items-center ">
      <div className="w-20">
        <img src={gifLoad} alt="LoaderImage" />
      </div>
    </div>
  );
};

export default FallbackSpinner;
