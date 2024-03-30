import { useState } from "react";

const UserForm = () => {
  let isAdmin = false;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [className, setClassName] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail(`${name}@talrise.com`);
    setPassword("password");
    const user = { name, email, password, className, isAdmin, isTeacher };
    const response = await fetch("http://localhost:3000/api/users/", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "applivation/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      setName("");
      setPassword("");
      setEmail("");
      setClassName("");
      setName("");
      setError(null);
      console.log("data", data);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add new user</h3>
      <label>Fullname</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>ClassName</label>
      <input
        type="text"
        onChange={(e) => setClassName(e.target.value)}
        value={className}
      />
      <div>
        <input type="checkbox" value={isTeacher} />
        <label>Teacher</label>
      </div>
      <button>submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default UserForm;
