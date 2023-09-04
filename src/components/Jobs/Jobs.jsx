import styles from "./Jobs.module.css";
import JobItem from "../JobItem/JobItem";

const jobs = [
  {
    title: "Waiter",
    heading:
      "Experience the Art of Hospitality as a Waiter/Waitress in Our Pizzeria",
    text: "Are you a people-person who loves making dining memorable? Join our waitstaff team, where you'll guide guests through our mouthwatering menu, provide attentive service, and contribute to the lively atmosphere that makes our pizzeria special. Your passion for delivering exceptional experiences and your role as a key player in our close-knit team will make each shift rewarding and enjoyable. Be part of the magic that turns a meal into a memory—apply now and let's create great moments together!",
  },
  {
    title: "Chef",
    heading: "Unleash Your Culinary Creativity as a Chef in Our Pizzeria",
    text: "Are you a culinary enthusiast with a flair for crafting delicious masterpieces? Join our kitchen team as a chef and immerse yourself in a world of flavors, techniques, and innovation. Your expertise will be the driving force behind our delectable pizzas, pastas, and more, delighting the taste buds of our cherished guests. Collaborate with a group of dedicated professionals who share your passion, and let's bring our culinary vision to life, one dish at a time. If you're ready to showcase your skills in a dynamic environment that celebrates culinary excellence, apply now and let's embark on this flavorful journey together!",
  },
  {
    title: "Manager ",
    heading: "Lead and Inspire as a Manager in Our Pizzeria",
    text: "Elevate your career by joining us as a manager and be at the helm of our culinary haven. As a key orchestrator of our pizzeria's success, you'll blend your leadership prowess with your passion for exceptional dining experiences. Your role will encompass everything from team coordination and guest satisfaction to strategic planning and operational excellence. Join our family of dedicated professionals who take pride in curating memorable moments, and let's shape the future of our pizzeria together. If you're ready to make a mark in the world of hospitality, apply now and let the journey begin!",
  },
];

export default function Jobs() {
  return (
    <section className={styles.jobs}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>Currently we are looking for...</h3>
        {jobs.map((job, index) => (
          <JobItem
            title={job.title}
            heading={job.heading}
            description={job.text}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
