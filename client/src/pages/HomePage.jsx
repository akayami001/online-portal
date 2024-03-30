import { useEffect, useState } from "react";
import UserDetails from "../components/UserDetails";
import UserForm from "../components/UserForm";

const HomePage = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/users");
        console.log("🚀 ~ fetchUsers ~ response:", response);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        console.log("🚀 ~ fetchUsers ~ data:", data);
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home">
      <div className="users">
        {users &&
          users.map((user) => <UserDetails key={user._id} user={user} />)}
      </div>
      <UserForm/>
    </div>
  );
};

export default HomePage;
