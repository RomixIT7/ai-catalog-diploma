import { Link } from "react-router-dom";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.background}>
      <div className="container">
        <h1 className={css.title}>Explore the AI Universe</h1>
        <p className={css.subTitle}>
          Find, compare, and integrate the best artificial intelligence models
          into your workflow.
        </p>
        <Link to="/catalog" className={css.link}>
          Explore Catalog
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
