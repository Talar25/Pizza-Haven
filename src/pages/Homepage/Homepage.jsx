import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import PageNav from "../../components/PageNav/PageNav";
import Welcome from "../../components/Welcome/Welcome";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <PageNav />
      <Welcome type="welcome__sectionHp" />
      <AboutUs />
      <Banner type="homepage" />
      <Footer />
    </>
  );
}
