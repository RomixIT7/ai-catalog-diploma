import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CategoriesList from "../CategoriesList/CategoriesList.jsx";

import { addFavorite, deleteFavorite } from "../../redux/favorite/slice.js";
import { selectFavorites } from "../../redux/favorite/selectors.js";

import css from "./Camper.module.css";

const Camper = ({ camper }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);

  const toggleFav = favorites?.includes(camper._id);

  const handleClick = (id) => {
    if (toggleFav) {
      dispatch(deleteFavorite(id)); // Передаємо id для видалення
      return;
    }

    dispatch(addFavorite(id)); // Передаємо id для додавання
  };

  return (
    <li className={css.campersItem}>
      <img
        className={css.camperImg}
        src={Array.isArray(camper.gallery) && camper.gallery[0]?.original}
        alt={camper.description}
      />

      <div className={css.camperInfoWrapper}>
        <div>
          <div className={css.camperNameAndPriceWrapper}>
            <p>{camper.name}</p>
            <div className={css.camperPriceWrapper}>
              <p style={{ textTransform: "capitalize" }}>{camper.accessType}</p>
              <svg
                onClick={() => {
                  handleClick(camper._id);
                }}
                className={`${css.favoriteIcon} ${
                  toggleFav ? css.favoriteIconChecked : ""
                }`}
                width="26"
                height="24"
              >
                <use href="/symbol-defs.svg#icon-heart"></use>
              </svg>
            </div>
          </div>

          <div className={css.camperRatingAndLocationWrapper}>
            <div className={css.camperRatingWrapper}>
              <img
                src="/yellow-star.png"
                width="16"
                height="16"
                alt="Rating star"
              />
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
        </div>

        <p className={css.description}>{camper.description}</p>

        <CategoriesList camper={camper} />

        <Link
          className={css.showMoreBtn}
          to={`/catalog/${camper._id}`}
          target="_blank"
        >
          Show more
        </Link>
      </div>
    </li>
  );
};

export default Camper;
