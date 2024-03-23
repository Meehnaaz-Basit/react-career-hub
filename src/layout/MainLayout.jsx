import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1200px] w-[90%] lg-w[84%]">
        <div>
          <Nav></Nav>
        </div>
        {/* outlet */}
        <Outlet></Outlet>
      </div>
      <div className="bg-[#1A1919]">
        <div className="container mx-auto max-w-[1200px] w-[90%] lg-w[84%]">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
