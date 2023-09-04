import styles from "./Menu.module.css";
import PageNav from "../../components/PageNav/PageNav";
import Welcome from "../../components/Welcome/Welcome";
import MenuSection from "../../components/MenuSection/MenuSection";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

export default function Menu() {
  return (
    <div>
      <PageNav />
      <Welcome type="welcome__sectionMenu" />
      <MenuSection>
        <Outlet />
      </MenuSection>
      <Banner type="menu" />
      <Footer />
    </div>
  );
}
