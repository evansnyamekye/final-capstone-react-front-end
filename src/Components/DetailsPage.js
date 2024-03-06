import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { fetchDetailsPage } from '../Redux/places/detailsPageSlice';
import '../Placelist.css';
import '../DetailsPage.css';

function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailsPage = useSelector((state) => state.detailsPage.detailsPage);
  const status = useSelector((state) => state.detailsPage.status);
  const error = useSelector((state) => state.detailsPage.error);

  useEffect(() => {
    dispatch(fetchDetailsPage(id));
  }, [dispatch, id]);

  if (status === 'loading' || status === 'idle') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="item-details">
        <div className="main">
          <div className="image-section">
            <img className="image" src={detailsPage.photo} alt={detailsPage.description} />
          </div>
          <div className="price-section">
            <h2 className="title">{detailsPage.description}</h2>
            <p>
              Location:
              {detailsPage.location}
            </p>
            <p>
              Rate:
              <StarRating rating={detailsPage.rate} />
            </p>
            <p>
              Address:
              {detailsPage.address}
            </p>
            <p className="price-per-night">
              Price per night:$
              {detailsPage.pricepernight}
            </p>
            <Link to="/layout/addReservation">
              <button className="add-res-button" type="button">Add Reservation</button>
            </Link>
          </div>
        </div>
      </div>
    </>

  );
}

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>{index + 1 <= rating ? '\u2605' : '\u2606'}</span>
  ));

  return <div>{stars}</div>;
};

// Prop types validation for StarRating component
StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default DetailsPage;
