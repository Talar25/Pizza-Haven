import styles from "./Contact.module.css";
import PageNav from "../../components/PageNav/PageNav";
import Welcome from "../../components/Welcome/Welcome";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map";

export default function Contact() {
  return (
    <>
      <PageNav />
      <Welcome type="welcome__sectionContact" />
      <Form />
      <Map />
      <Footer />
    </>
  );
}
