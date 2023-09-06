import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { missions, joinedMissions } = useSelector((store) => store.missions);
  const reservedMissions = missions.filter((mission) => joinedMissions.includes(mission.id));
  return (
    <div className="profile">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">My Missions</th>
          </tr>
        </thead>
        <tbody>
          {reservedMissions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
