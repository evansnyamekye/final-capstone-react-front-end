import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlaces } from '../Redux/places/placesSlice';
import { fetchDetailsPage } from '../Redux/places/detailsPageSlice';
import '../Placelist.css';

function PlacesList() {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);
  const status = useSelector((state) => state.places.status);
  const error = useSelector((state) => state.places.error);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Fetch details page function
  const handleViewDetails = (placeId) => {
    dispatch(fetchDetailsPage(placeId));
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlaces());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
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

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = places.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(places.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="center">
      <h1>Accomodations</h1>
      <h5>Select Accomodations to Reserve</h5>
      <ul>
        <button type="button" id="previous" onClick={prevPage} disabled={currentPage === 1}><img src="../images/previous.svg" alt="previous" /></button>
        {currentItems.map((place) => (
          <li key={place.id} className="card">
            <h3>{place.description}</h3>
            <img className="place-img" src={place.photo} alt={place.description} />
            <div>
              Price Per Night:$
              {place.pricepernight}
            </div>
            <div>
              Location:
              {place.location}
            </div>
            Rate:
            <StarRating rating={place.rate} />
            {' '}

            Address:
            {place.address.length > 10 ? `${place.address.substring(0, 30)}...` : place.address}

            <ul className="social-icons">
              <li><a href="https://www.twitter.com/vespa"><img src="https://img.icons8.com/ios/50/000000/twitter.png" alt="twitter-icon" /></a></li>
              <li><a href="https://www.facebook.com/vespa"><img src="https://img.icons8.com/ios/50/000000/facebook.png" alt="facebook-icon" /></a></li>
              <li><a href="https://www.instagram.com/vespa"><img src="https://img.icons8.com/ios/50/000000/google.png" alt="twitter-icon" /></a></li>
              <li><a href="https://www.twitter.com/vespa"><img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram-icon" /></a></li>
              <li><a href="https://www.twitter.com/vespa"><img src="https://img.icons8.com/ios/50/000000/p.png" alt="p-icon" /></a></li>
            </ul>
            <button type="submit" onClick={() => handleViewDetails(place.id)}>
              <Link to={`/layout/detailsPage/${place.id}`}>View Details</Link>
            </button>
          </li>
        ))}
        <button type="button" id="next" onClick={nextPage} disabled={currentPage === Math.ceil(places.length / itemsPerPage)}><img src="../images/next.svg" alt="next_button" /></button>
      </ul>

      <div className="pagination">

        {[...Array(Math.ceil(places.length / itemsPerPage)).keys()].map((pageNumber) => (
          <button key={pageNumber} type="button" onClick={() => paginate(pageNumber + 1)} className={currentPage === pageNumber + 1 ? 'active' : ''}>{pageNumber + 1}</button>
        ))}

      </div>
    </div>
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

export default PlacesList;
