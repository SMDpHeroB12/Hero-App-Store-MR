import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import FallbackSpinner from "../Components/FallbackSpinner";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timer;

    if (navigation.state === "loading") {
      setShowLoader(true);
    }

    if (navigation.state === "idle") {
      timer = setTimeout(() => {
        setShowLoader(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [navigation.state]);

  return (
    <div>
      <Navbar />

      {showLoader && <FallbackSpinner />}

      <main>
        <Outlet />
      </main>

      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default MainLayout;
