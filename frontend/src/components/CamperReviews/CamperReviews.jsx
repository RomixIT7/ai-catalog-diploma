import { v4 as uuidv4 } from "uuid";

import css from "./CamperReviews.module.css";

const CamperReviews = ({ camper }) => {
  return (
    <ul className={css.camperReviewsList}>
      {Array.isArray(camper.reviews) &&
        camper.reviews.map((review) => {
          return (
            <li className={css.camperReviewsListItem} key={uuidv4()}>
              <div className={css.camperReviewerInfoWrapper}>
                <div className={css.camperReviewerAvatar}>
                  {review.reviewer_name.slice(0, 1)}
                </div>
                <div>
                  <p className={css.camperReviewerName}>
                    {review.reviewer_name}
                  </p>
                  <ul className={css.starList}>
                    <li>
                      <img
                        src={`/${
                          review.reviewer_rating >= 1 ? "yellow" : "gray"
                        }-star.png`}
                        width="16"
                        height="16"
                      />
                    </li>
                    <li>
                      <img
                        src={`/${
                          review.reviewer_rating >= 2 ? "yellow" : "gray"
                        }-star.png`}
                        width="16"
                        height="16"
                      />
                    </li>
                    <li>
                      <img
                        src={`/${
                          review.reviewer_rating >= 3 ? "yellow" : "gray"
                        }-star.png`}
                        width="16"
                        height="16"
                      />
                    </li>
                    <li>
                      <img
                        src={`/${
                          review.reviewer_rating >= 4 ? "yellow" : "gray"
                        }-star.png`}
                        width="16"
                        height="16"
                      />
                    </li>
                    <li>
                      <img
                        src={`/${
                          review.reviewer_rating >= 5 ? "yellow" : "gray"
                        }-star.png`}
                        width="16"
                        height="16"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <p className={css.camperReviewComment}>{review.comment}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default CamperReviews;
