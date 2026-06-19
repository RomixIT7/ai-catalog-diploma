import CategoriesList from "../CategoriesList/CategoriesList.jsx";

import css from "./CamperFeatures.module.css";

const CamperFeatures = ({ camper }) => {
  return (
    <div className={css.featuresWrapper}>
      <CategoriesList camper={camper} />

      <div>
        <p className={css.vehicleDetailsTitle}>Technical details</p>
        <ul className={css.vehicleDetailsList}>
          <li className={css.vehicleDetailsListItem}>
            <p>Category</p>
            <span style={{ textTransform: "capitalize" }}>
              {camper.category}
            </span>
          </li>
          <li className={css.vehicleDetailsListItem}>
            <p>Release Year</p>
            <span>{camper.releaseYear}</span>
          </li>
          <li className={css.vehicleDetailsListItem}>
            <p>Context Window</p>
            <span>{camper.contextWindow}</span>
          </li>
          <li className={css.vehicleDetailsListItem}>
            <p>License</p>
            <span>{camper.licenseType}</span>
          </li>
          <li className={css.vehicleDetailsListItem}>
            <p>Legal Status</p>
            <span>{camper.legalStatus}</span>
          </li>
          <li className={css.vehicleDetailsListItem}>
            <p>Pricing</p>
            <span className={css.pricingText}>{camper.pricingDetails}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CamperFeatures;
