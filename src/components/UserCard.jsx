import PropTypes from "prop-types";
import { postSendRequest } from "../services/request";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/slices/feedSlice";
const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await postSendRequest(status, userId);
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.log(error);
    }
  };

  const { firstName, lastName, photoUrl, age, gender, about, _id } = user;
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-3">
      <figure>
        <img src={photoUrl} alt="photo" className="h-40 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        {age && <span>{age}</span>}
        {gender && <span>{gender}</span>}

        <p>{about}</p>
        <div className="card-actions justify-center items-center">
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-success"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  user: {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photoUrl: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    about: PropTypes.string,
  },
};
