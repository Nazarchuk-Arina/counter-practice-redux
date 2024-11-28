import { useEffect, useRef, useState, Suspense } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { fetchUsersById } from "../../services/api";

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/users");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsersById(userId);
      setUser(data);
    };

    getData();
  }, [userId]);

  if (!user) {
    return <h2>loading</h2>;
  }

  return (
    <div>
      <Link to={goBackLink.current}>Go back</Link>
      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <div>
        <nav>
          <Link to="info">Show info</Link>
          <Link to="posts">Show posts</Link>
        </nav>
        <Suspense fallback={<h2>Loading</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default UserDetails;
