import styles from "./Careers.module.css";
import PageNav from "../../components/PageNav/PageNav";
import Footer from "../../components/Footer/Footer";
import Welcome from "../../components/Welcome/Welcome";
import Jobs from "../../components/Jobs/Jobs";

export default function Careers() {
  return (
    <>
      <PageNav />
      <Welcome type="welcome__sectionCareers" />
      <Jobs />
      <Footer />
    </>
  );
}
