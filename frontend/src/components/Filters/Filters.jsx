import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { fetchCampers } from "../../redux/campers/operation.js";

import css from "./Filters.module.css";

const initialValues = {
  location: "",
  AC: false,
  transmission: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  form: "",
};

const validationSchema = Yup.object().shape({
  location: Yup.string().trim(),
  AC: Yup.boolean(),
  transmission: Yup.boolean(),
  kitchen: Yup.boolean(),
  TV: Yup.boolean(),
  bathroom: Yup.boolean(),
  form: Yup.string().oneOf([
    "chatbots",
    "images",
    "video",
    "audio",
    "code",
    "3d",
    "game",
    "agents",
    "design",
  ]),
});

const Filters = ({ onSearch }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const copyValues = { ...values };
    for (const key in copyValues) {
      if (copyValues[key] === initialValues[key]) {
        delete copyValues[key];
      }
    }

    dispatch(fetchCampers(copyValues));

    if (typeof onSearch === "function") {
      onSearch();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label className={css.label}>
          Developer Company
          <div className={css.inputWrapper}>
            <Field
              className={css.input}
              type="text"
              name="location"
              placeholder="e.g. OpenAI, Google"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="location"
              component="span"
            />
            <svg className={css.iconMap} width="20" height="20">
              <use href="/symbol-defs.svg#icon-map"></use>
            </svg>
          </div>
        </label>

        <p className={css.filters}>Filters</p>

        <p className={css.vehicleCharacteristics}>AI Capabilities</p>
        <ul className={css.vehicleCharacteristicsList}>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.checkbox}`}
              type="checkbox"
              name="AC"
              id="ac"
            />
            <label htmlFor="ac" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              API Available
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.checkbox}`}
              type="checkbox"
              name="transmission"
              id="automatic"
            />
            <label htmlFor="automatic" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                <path d="M12 8v8M5 16v-4h14v4"></path>
              </svg>
              Hybrid Access
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.checkbox}`}
              type="checkbox"
              name="kitchen"
              id="kitchen"
            />
            <label htmlFor="kitchen" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              Mobile App
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.checkbox}`}
              type="checkbox"
              name="TV"
              id="tv"
            />
            <label htmlFor="tv" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Vision
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.checkbox}`}
              type="checkbox"
              name="bathroom"
              id="bathroom"
            />
            <label htmlFor="bathroom" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
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
              Voice Support
            </label>
          </li>
        </ul>

        <p className={css.vehicleCharacteristics}>AI Category</p>
        <ul className={css.vehicleCharacteristicsList}>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="chatbots"
              id="chatbots"
            />
            <label htmlFor="chatbots" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Chatbots
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="images"
              id="images"
            />
            <label htmlFor="images" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              Images
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="video"
              id="video"
            />
            <label htmlFor="video" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
              Video
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="audio"
              id="audio"
            />
            <label htmlFor="audio" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Audio
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="code"
              id="code"
            />
            <label htmlFor="code" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Code Gen
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="3d"
              id="3d"
            />
            <label htmlFor="3d" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              3D Gen
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="game"
              id="game"
            />
            <label htmlFor="game" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="6" y1="12" x2="10" y2="12"></line>
                <line x1="8" y1="10" x2="8" y2="14"></line>
                <line x1="15" y1="13" x2="15.01" y2="13"></line>
                <line x1="18" y1="11" x2="18.01" y2="11"></line>
                <rect x="2" y="6" width="20" height="12" rx="3"></rect>
              </svg>
              Game Dev
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="agents"
              id="agents"
            />
            <label htmlFor="agents" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M7 20.662V19a5 5 0 0 1 10 0v1.662"></path>
              </svg>
              Agents
            </label>
          </li>
          <li>
            <Field
              className={`${css.visuallyHidden} ${css.radioBtn}`}
              type="radio"
              name="form"
              value="design"
              id="design"
            />
            <label htmlFor="design" className={css.btn}>
              <svg
                className={css.icon}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.03444 18.5 5.54299 18 6.5 18C7.5 18 8 18.5 8.5 19C9 19.5 9 20.5 8.5 21C8 21.5 7.46406 21.9141 7 21.9613M12 22C11.5 22 10 22 9 21.5M7 6H7.01M11 5H11.01M16 6H16.01M19 9H19.01M19 13H19.01"></path>
              </svg>
              Design
            </label>
          </li>
        </ul>

        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default Filters;
