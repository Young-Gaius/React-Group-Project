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
    <ul>
      {rockets.map((rocket) => (
        <li key={rocket.id} className="flex">
          <div>
            <img src={rocket.flickr_images[0]} alt="starship" className="img-md" />
          </div>
          <div>
            <div>
              {rocket.reserved && <span className="reserved">Reserved</span>}
              <strong>{rocket.name}</strong>
            </div>
            <div>{rocket.description}</div>
            {rocket.reserved ? (
              <button type="submit" onClick={() => handleCancelRocket(rocket.id)}>Cancel Reservation</button>
            ) : (
              <button type="submit" onClick={() => handleReserveRocket(rocket.id)}>Reserve Rocket</button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Rockets;
