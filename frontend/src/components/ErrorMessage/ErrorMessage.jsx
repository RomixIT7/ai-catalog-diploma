import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return (
    <p className={css.errorMessage}>
      {error?.status === 404
        ? "Nothing found"
        : "Something went wrong! Try again later."}
    </p>
  );
};

export default ErrorMessage;
