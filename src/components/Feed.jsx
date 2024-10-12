import { useEffect } from "react";
import { getFeed } from "../services/user";
import { useDispatch, useSelector } from "react-redux";
import { addFeedData, setErrorMessage } from "../utils/slices/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const getFeedData = async () => {
    try {
      const resp = await getFeed();
      dispatch(addFeedData(resp.data.data));
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };
  useEffect(() => {
    getFeedData();
  }, []);

  if (!feed.feedData) return;

  if (feed.feedData.length === 0)
    return <h1 className="text-center mt-5">No Users Found</h1>;

  return (
    feed.feedData.length > 0 && (
      <div>
        <div className="flex flex-col items-center justify-center">
          <UserCard user={feed?.feedData[0]} />
        </div>
      </div>
    )
  );
};

export default Feed;
