const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h4>{user.name}</h4>
      <h4>Class: {user.className}</h4>
      <p>Email: {user.email}</p>

    </div>
  );
};

export default UserDetails;
