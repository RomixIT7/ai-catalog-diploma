import clsx from "clsx";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";

import CamperForm from "../CamperForm/CamperForm.jsx";
import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import CamperReviews from "../CamperReviews/CamperReviews.jsx";

import css from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  const camperDetailsListLinkActive = ({ isActive }) =>
    clsx(css.camperDetailsListLink, { [css.active]: isActive });

  return (
    <>
      <p className={css.camperNameAndPrice}>{camper.name}</p>
      <div className={css.camperRatingAndLocationWrapper}>
        <div className={css.camperRatingWrapper}>
          <img src="/yellow-star.png" width="16" height="16" alt="Star" />
          <p className={css.camperRating}>
            {camper.rating} ({camper.reviews?.length} Reviews)
          </p>
        </div>
        <div className={css.camperRatingWrapper}>
          <svg className={css.icon} width="16" height="16">
            <use href="/symbol-defs.svg#icon-map"></use>
          </svg>
          <p>{camper.developer}</p>
        </div>
      </div>
      <p
        className={css.camperNameAndPrice}
        style={{ textTransform: "capitalize" }}
      >
        Access: {camper.accessType}
      </p>
      <div className={css.camperGallery}>
        {Array.isArray(camper.gallery) &&
          camper.gallery.map((img, index) => (
            <img
              key={index}
              className={css.camperImg}
              src={img.original}
              alt={`${camper.name} gallery ${index + 1}`}
            />
          ))}
      </div>
      <p className={css.camperDescription}>{camper.description}</p>
      <ul className={css.camperDetailsList}>
        <li>
          <NavLink className={camperDetailsListLinkActive} to="features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink className={camperDetailsListLinkActive} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={css.camperAdditionalDetailsWrapper}>
        <Routes>
          <Route path="/" element={<Navigate to="features" replace />}></Route>
          <Route
            path="features"
            element={<CamperFeatures camper={camper} />}
          ></Route>
          <Route
            path="reviews"
            element={<CamperReviews camper={camper} />}
          ></Route>
        </Routes>
        <CamperForm />
      </div>
    </>
  );
};

export default CamperDetails;
