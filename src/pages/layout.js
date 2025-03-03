import Footer from "../components/footer";
import NavBar from "../components/navbar";
import HomePage from "./homepage";

const ScreenLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default ScreenLayout;
