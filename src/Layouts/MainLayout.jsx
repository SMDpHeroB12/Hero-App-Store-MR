import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="flex h-screen justify-center">
        <h1 className="text-3xl font-bold mt-10">Vite + React</h1>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
