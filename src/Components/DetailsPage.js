import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetailsPage } from '../Redux/places/detailsPageSlice';
import '../DetailsPage.css';
import '../Navigation.css';

function DetailsPage({ match }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailsPage = useSelector((state) => state.detailsPage.detailsPage);
  const status = useSelector((state) => state.detailsPage.status);
  const error = useSelector((state) => state.detailsPage.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDetailsPage(match.params.id));
    }
  }, [status, dispatch, match.yparams.id]);

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

  return (
    <div>
      <img src={detailsPage.photo} alt={detailsPage.name} />
      <h1>{detailsPage.name}</h1>
      <p>{detailsPage.description}</p>
      <p>{detailsPage.location}</p>
      <p>{detailsPage.rate}</p>
      <p>{detailsPage.address}</p>
    </div>
  );
}

export default DetailsPage;
