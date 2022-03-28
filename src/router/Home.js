import navList from "../atom/NavList";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      {navList.map(slide => {
        return (
          <div className={styles.slide_box}>
            <h3 className={styles.title}>
              <Link to={`/page/${slide.path}/1`}>
                <i class="fas fa-external-link-alt"></i>
                <span>{slide.title} Movie</span>
              </Link>
            </h3>
            <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${slide.path}&sort_by=year`} />
          </div>
        )
      })}
    </div>
  );
}
export default Home;