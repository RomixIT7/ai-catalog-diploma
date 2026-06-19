import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Camper from "../Camper/Camper.jsx";

import { selectCampers } from "../../redux/campers/selectors.js";
import { selectError, selectLoading } from "../../redux/global/selectors.js";
import { fetchCampers } from "../../redux/campers/operation.js";
import { selectFavorites } from "../../redux/favorite/selectors.js";

import css from "./CampersList.module.css";

const CampersList = () => {
  const [page, setPage] = useState(1);
  const perPage = 4;
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const favoriteCampersIdArray = useSelector(selectFavorites);
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const favoriteCampers = campers?.filter((camper) =>
    favoriteCampersIdArray?.includes(camper._id),
  );

  const whichPageIsIt = pathname === "/catalog" ? campers : favoriteCampers;
  const totalPages = Math.ceil(whichPageIsIt?.length / perPage);

  const getCurrentPageData = () => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return whichPageIsIt?.slice(0, end);
  };

  const handleClick = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {!error &&
        !loading &&
        getCurrentPageData() &&
        getCurrentPageData()?.length > 0 && (
          <div>
            <ul className={css.campersList}>
              {Array.isArray(getCurrentPageData()) &&
                getCurrentPageData().map((camper) => {
                  return <Camper key={camper._id} camper={camper} />;
                })}
            </ul>
            {page < totalPages && (
              <button className={css.loadMoreBtn} onClick={handleClick}>
                Load more
              </button>
            )}
          </div>
        )}

      {!error && !loading && getCurrentPageData()?.length === 0 && (
        <div className={css.nothingToShow}>Nothing to show</div>
      )}
    </>
  );
};

export default CampersList;
