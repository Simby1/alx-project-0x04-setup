import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from "@/interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen pt-24"> {/* Added pt-24 to offset fixed header height */}
      <Header />
      <main className="flex-grow">{children}</main> {/* flex-grow ensures main takes up available space */}
      <Footer />
    </div>
  );
};

export default Layout;