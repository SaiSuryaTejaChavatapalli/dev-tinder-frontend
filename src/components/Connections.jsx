import { useEffect } from "react";
import { getConnections } from "../services/user";
import { addConnections, setLoading } from "../utils/slices/connectionsSlice";
import { useDispatch, useSelector } from "react-redux";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const fetchConnections = async () => {
    try {
      dispatch(setLoading(true));
      const resp = await getConnections();
      dispatch(addConnections(resp.data.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (connections.loading)
    return <h1 className="text-center mt-5">Loading...</h1>;

  if (connections.connectionsList.length === 0) {
    return <h1 className="text-center mt-5"> No Connections</h1>;
  }

  return (
    <div>
      <h1 className="font-bold text-center text-3xl my-3 text-gray-800-300">
        Connections{" "}
      </h1>
      <div className="flex flex-col items-center justify-center gap-2">
        {connections?.connectionsList?.map((connection) => {
          const { firstName, lastName, photoUrl, about, skills, age, _id } =
            connection;
          return (
            <div className="card bg-base-100 w-2/3 shadow-2xl" key={_id}>
              <div className="card-body">
                <div className="flex ">
                  <div className="w-2/3">
                    <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
                    <p>{about}</p>
                    <p>Age:{age}</p>
                    <p>{about}</p>
                    <p>Skills: {skills.join(",")}</p>
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

export default Connections;
