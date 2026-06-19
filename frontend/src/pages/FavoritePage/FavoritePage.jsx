import CampersList from "../../components/CampersList/CampersList.jsx";

import css from "./FavoritePage.module.css";

const FavoritePage = () => {
  return (
    <div className={css.favoritePage}>
      <div className={`container ${css.favoritePageWrapper}`}>
        <CampersList />
      </div>
    </div>
  );
};

export default FavoritePage;
