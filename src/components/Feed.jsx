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

  return (
    feed.feedData.length > 0 && (
      <div>
        <h1>Feed</h1>

        <div>
          <UserCard user={feed?.feedData[0]} />
        </div>
      </div>
    )
  );
};

export default Feed;
