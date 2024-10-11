import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateProfile } from "../services/profile";

const Profile = () => {
  const loggedInUser = useSelector((store) => store?.user?.userData);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(loggedInUser);
  }, [loggedInUser]);

  const handleUpdate = async (e) => {
    const allowedEditFields = [
      "firstName",
      "lastName",
      "photoUrl",
      "gender",
      "age",
      "about",
      "skills",
    ];

    Object.keys(user).forEach((item) => {
      if (!allowedEditFields.includes(item)) {
        delete user[item];
      }
    });

    e.preventDefault();
    try {
      await updateProfile(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-4 justify-center">
      <div className="card card-bordered bg-base-100 w-96 shadow-xl flex flex-col items-center p-8">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={loggedInUser?.photoUrl} alt="user-img" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {loggedInUser?.firstName} {loggedInUser?.lastName}
          </h2>
          <h6 className="">{loggedInUser?.emailId}</h6>
          <h6 className="">{loggedInUser?.gender}</h6>
        </div>
      </div>
      <div className="card card-bordered bg-base-100 w-2/3 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Info</h2>
          <form className="flex flex-col gap-4">
            <div className="flex w-full">
              <div className="flex flex-col gap-3 w-full">
                <input
                  type="text"
                  placeholder="First name"
                  className="input input-bordered w-full max-w-xs"
                  value={user?.firstName}
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
                  value={user?.emailId}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, emailId: e.target.value };
                    })
                  }
                  disabled
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <input
                  type="text"
                  placeholder="Gender"
                  className="input input-bordered w-full max-w-xs"
                  value={user?.gender}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Skills"
                  className="input input-bordered w-full max-w-xs"
                  value={user?.skills}
                  onChange={(e) =>
                    setUser((prev) => {
                      return {
                        ...prev,
                        skills: [...prev.skills, e.target.value],
                      };
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full max-w-xs"
                  value={user?.photoUrl}
                  onChange={(e) =>
                    setUser((prev) => {
                      return {
                        ...prev,
                        photoUrl: e.target.value,
                      };
                    })
                  }
                />
              </div>
            </div>

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
