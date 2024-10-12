import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addConnectionRequests,
  setLoading,
} from "../utils/slices/connectionRequests";
import { getConnectionRequests } from "../services/user";
import { postReviewRequest } from "../services/request";

const ConnectionRequests = () => {
  const dispatch = useDispatch();
  const connectionRequests = useSelector((store) => store.connectionRequests);

  const fetchConnectionRequests = async () => {
    try {
      dispatch(setLoading(true));
      const resp = await getConnectionRequests();
      dispatch(addConnectionRequests(resp.data.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const reviewRequests = async (status, requestId) => {
    try {
      await postReviewRequest(status, requestId);
      fetchConnectionRequests();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConnectionRequests();
  }, []);

  if (!connectionRequests) return;

  if (connectionRequests?.loading)
    return <h1 className="text-center mt-5">Loading...</h1>;

  if (connectionRequests?.connectionRequestsList.length === 0) {
    return <h1 className="text-center mt-5"> No Requests</h1>;
  }

  return (
    <div>
      <h1 className="font-bold text-center text-3xl my-3 text-gray-800-300">
        Connection Requests{" "}
      </h1>
      <div className="flex flex-col items-center justify-center gap-2">
        {connectionRequests?.connectionRequestsList?.map((connection) => {
          const { firstName, lastName, photoUrl, about, skills, age, _id } =
            connection.data;
          return (
            <div className="card bg-base-100 w-2/3 shadow-2xl" key={_id}>
              <div className="card-body">
                <div className="flex">
                  <div className="w-2/3">
                    <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
                    <p>{about}</p>
                    <p>Age:{age}</p>
                    <p>Skills: {skills.join(",")}</p>
                    <div className="flex gap-2 my-2">
                      <button
                        className="btn btn-error"
                        onClick={() =>
                          reviewRequests("rejected", connection.requestId)
                        }
                      >
                        Reject
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          reviewRequests("accepted", connection.requestId)
                        }
                      >
                        Accept
                      </button>
                    </div>
                  </div>

                  <div>
                    <img
                      src={photoUrl}
                      alt="photo"
                      className="w-full rounded-full h-24"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectionRequests;
