import css from "./CategoriesList.module.css";

const CategoriesList = ({ camper }) => {
  return (
    <ul className={css.categoriesList}>
      {/* 1. Interface Type */}
      <li className={css.categoriesItem}>
        <svg
          className={css.icon}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <p>{camper.interfaceType}</p>
      </li>

      {/* 2. License Type */}
      <li className={css.categoriesItem}>
        <svg
          className={css.icon}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <p>{camper.licenseType}</p>
      </li>

      {/* 3. API Available */}
      {camper.hasApi && (
        <li className={css.categoriesItem}>
          <svg
            className={css.icon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <p>API Available</p>
        </li>
      )}

      {/* 4. Mobile App */}
      {camper.hasMobileApp && (
        <li className={css.categoriesItem}>
          <svg
            className={css.icon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
          <p>Mobile App</p>
        </li>
      )}

      {/* 5. Plugins */}
      {camper.hasPluginSystem && (
        <li className={css.categoriesItem}>
          <svg
            className={css.icon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          </svg>
          <p>Plugins</p>
        </li>
      )}

      {/* 6. Vision */}
      {camper.hasVision && (
        <li className={css.categoriesItem}>
          <svg
            className={css.icon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <p>Vision</p>
        </li>
      )}

      {/* 7. Voice Support */}
      {camper.hasVoice && (
        <li className={css.categoriesItem}>
          <svg
            className={css.icon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.08"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
          <p>Voice Support</p>
        </li>
      )}
    </ul>
  );
};

export default CategoriesList;
