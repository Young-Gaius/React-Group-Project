import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
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
  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };
  const handleCancelRocket = (rocketId) => {
    dispatch(cancelRocket(rocketId));
  };
  return (
    <ul className="container m-auto">
      {rockets.map((rocket) => (
        <li key={rocket.id} className="row mt-5 mb-5">
          <div className="col-md-2 mb-2">
            <img src={rocket.flickr_images[0]} alt="starship" className=" img-fluid" />
          </div>
          <div className="col-md-10">
            <div>
              <strong>{rocket.name}</strong>
            </div>
            <div className="col">
              {rocket.reserved && <span className="badge bg-info m-2">Reserved</span>}
              {rocket.description}
            </div>
            {rocket.reserved ? (
              <button type="button" className="btn btn-light" onClick={() => handleCancelRocket(rocket.id)}>Cancel Reservation</button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={() => handleReserveRocket(rocket.id)}>Reserve Rocket</button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Rockets;
