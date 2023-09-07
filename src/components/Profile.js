import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { missions, joinedMissions } = useSelector((store) => store.missions);
  const reservedMissions = missions.filter((mission) => joinedMissions.includes(mission.id));
  const resRockets = (state) => state.rockets.rockets.filter((rocket) => rocket.reserved === true);
  const newReservedRockets = useSelector(resRockets);
  return (

    <div className="d-flex m-4 justify-content-between">
      <div className="w-25">
        <h2>My Missions</h2>
        <ul className="list-group">
          {reservedMissions.map((mission) => (
            <li className="list-group-item" key={mission.id}>
              {mission.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-25 mx-5">
        <h2>My Rockets</h2>
        <ul className="list-group">
          {newReservedRockets.map((rocket) => (
            <li className="list-group-item" key={rocket.id}>
              {rocket.name}
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}

export default Profile;
