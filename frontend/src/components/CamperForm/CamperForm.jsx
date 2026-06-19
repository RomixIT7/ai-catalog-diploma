import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Flatpickr from "react-flatpickr";
import toast, { Toaster } from "react-hot-toast";

import "flatpickr/dist/flatpickr.min.css";

import css from "./CamperForm.module.css";

const notify = () => toast.success("Your request has been sent successfully!");

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const camperFormSchema = () =>
  Yup.object().shape({
    name: Yup.string().required("Name is required!").trim(),
    email: Yup.string()
      .email("Email is not valid!")
      .required("Email is required!")
      .trim(),
    date: Yup.string().required("Date is required!"),
    comment: Yup.string(),
  });

const CamperForm = () => {
  const handleSubmit = (values, actions) => {
    notify();
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <p className={css.formTitle}>Request AI Integration</p>
      <p className={css.formSubTitle}>
        Stay connected! We are always ready to help you deploy this tool.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={camperFormSchema}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className={css.inputsWrapper}>
              <div className={css.inputWrapper}>
                <Field
                  className={css.input}
                  type="text"
                  name="name"
                  placeholder="Name*"
                ></Field>
                <ErrorMessage
                  className={css.errorMessage}
                  name="name"
                  component="span"
                />
              </div>

              <div className={css.inputWrapper}>
                <Field
                  className={css.input}
                  type="text"
                  name="email"
                  placeholder="Email*"
                ></Field>
                <ErrorMessage
                  className={css.errorMessage}
                  name="email"
                  component="span"
                />
              </div>

              <div className={css.inputWrapper}>
                <Flatpickr
                  className={css.input}
                  type="text"
                  name="date"
                  placeholder="Preferred demo date*"
                  value={values.date}
                  onChange={(date) => {
                    setFieldValue("date", date[0]);
                  }}
                />
                <ErrorMessage
                  className={css.errorMessage}
                  name="date"
                  component="span"
                />
              </div>

              <Field
                className={`${css.textArea} ${css.input}`}
                as="textarea"
                name="comment"
                placeholder="Comment or Use Case Details"
              ></Field>
            </div>

            <button className={css.formBtn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: "var(--font-family)",
          },
        }}
      />
    </div>
  );
};

export default CamperForm;
