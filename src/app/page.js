import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-90">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;