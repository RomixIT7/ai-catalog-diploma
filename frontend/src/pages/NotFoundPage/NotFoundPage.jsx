import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (seconds === 5) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={css.notFoundPageWrapper}>
      <p className={css.notFoundText}>This page doesn&apos;t exist!</p>
      <p className={css.redirectText}>
        You will be redirected to home page in {5 - seconds} seconds
      </p>
      <Link className={css.linkToHome} to="/" replace>
        Go to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
