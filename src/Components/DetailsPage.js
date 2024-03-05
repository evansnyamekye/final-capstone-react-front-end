import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailsPage } from '../Redux/places/detailsPageSlice';
import '../DetailsPage.css';
import '../Navigation.css';

function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailsPage = useSelector((state) => state.detailsPage.detailsPage);
  const status = useSelector((state) => state.detailsPage.status);
  const error = useSelector((state) => state.detailsPage.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDetailsPage(id));
    }
  }, [status, dispatch, id]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'succeeded') {
    return <div>{detailsPage.name}</div>;
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
    <div>
      <h1>Details Page</h1>
      {/* <img src={detailsPage.photo} alt={detailsPage.name} />
      <h1>{detailsPage.name}</h1>
      <p>{detailsPage.description}</p>
      <p>{detailsPage.location}</p>
      <p>{detailsPage.rate}</p>
      <p>{detailsPage.address}</p>
      <p>
        User ID:
        {detailsPage.user_id}
      </p>
      <p>
        Created At:
        {new Date(detailsPage.created_at).toLocaleString()}
      </p>
      <p>
        Updated At:
        {new Date(detailsPage.updated_at).toLocaleString()}
      </p> */}
    </div>
  );
}

export default DetailsPage;
