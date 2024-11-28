import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    getData();
  }, []);

  const query = searchParams.get("query") ?? "";
  const filteredData = users.filter((user) =>
    user.firstName.toLowerCase().includes(query.toLowerCase())
  );

  const handleSetQuery = (newValue) => {
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <h1>Users</h1>
      <SearchBar handleSetQuery={handleSetQuery} />
      <ul>
        {filteredData.map((user) => (
          <li key={user.id}>
            <Link to={user.id.toString()} state={location}>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
