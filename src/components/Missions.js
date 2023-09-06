import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missionsSlice';

function Missions() {
  const missionData = useSelector((store) => store.missions);
  const {
    isLoading, missions, error, joinedMissions,
  } = missionData;
  const dispatch = useDispatch();

  function handleJoinMission(id) {
    dispatch(joinMission(id));
  }

  function handleLeaveMission(id) {
    dispatch(leaveMission(id));
  }

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr
              key={mission.id}
              className={joinedMissions.includes(mission.id) ? 'table-info' : ''}
            >
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>
                {joinedMissions.includes(mission.id) ? (
                  <span className="badge bg-info">Active Member</span>
                ) : (
                  <span className="badge bg-secondary">NOT A MEMBER</span>
                )}
              </td>
              <td>
                {joinedMissions.includes(mission.id) ? (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleLeaveMission(mission.id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleJoinMission(mission.id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Missions;
