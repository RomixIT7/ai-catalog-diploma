import { useState } from "react";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleFilters = () => {
    setIsFiltersOpen((prevState) => !prevState);
  };

  return (
    <div className={css.catalogPage}>
      <div className={`container ${css.catalogPageWrapper}`}>
        <button className={css.mobileFilterBtn} onClick={toggleFilters}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          Filters
        </button>

        <aside className={`${css.aside} ${isFiltersOpen ? css.isOpen : ""}`}>
          <div className={css.mobileHeader}>
            <h3>Filters</h3>
            <button className={css.closeBtn} onClick={toggleFilters}>
              ✕
            </button>
          </div>
          <div className={css.filtersContent}>
            <Filters onSearch={toggleFilters} />
          </div>
        </aside>

        <CampersList />
      </div>
    </div>
  );
};

export default CatalogPage;
