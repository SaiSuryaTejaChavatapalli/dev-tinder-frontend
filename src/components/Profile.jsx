import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateProfile } from "../services/profile";

const Profile = () => {
  const loggedInUser = useSelector((store) => store?.user?.userData);
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   setUser(loggedInUser);
  // }, [loggedInUser]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="card bg-base-100 w-96 shadow-xl flex items-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {loggedInUser?.firstName} {loggedInUser?.lastName}
          </h2>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Info</h2>
          <form>
            <input
              type="text"
              placeholder="First name"
              className="input input-bordered w-full max-w-xs"
              value={loggedInUser?.firstName}
              onChange={(e) =>
                setUser((prev) => {
                  return { ...prev, firstName: e.target.value };
                })
              }
            />
            <input
              type="text"
              placeholder="Last name"
              className="input input-bordered w-full max-w-xs"
              value={user?.lastName}
              onChange={(e) =>
                setUser((prev) => {
                  return { ...prev, lastName: e.target.value };
                })
              }
            />
            <input
              type="text"
              placeholder="About"
              className="input input-bordered w-full max-w-xs"
              value={user?.about}
              onChange={(e) =>
                setUser((prev) => {
                  return { ...prev, about: e.target.value };
                })
              }
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              value={user?.emailId}
              onChange={(e) =>
                setUser((prev) => {
                  return { ...prev, emailId: e.target.value };
                })
              }
              disabled
            />
            <input
              type="text"
              placeholder="Skills"
              className="input input-bordered w-full max-w-xs"
              value={user?.skills}
              onChange={(e) =>
                setUser((prev) => {
                  return { ...prev, skills: e.target.value };
                })
              }
            />
            <button className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
