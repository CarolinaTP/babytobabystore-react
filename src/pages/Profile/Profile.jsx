import "./Profile.css";

import { useUser } from "../../context/UserContext";

const Profile = () => {

  const {
    user,
    setUser
  } = useUser();

  return (
    <div className="profile-container">

      <h1>Perfil</h1>

      <input
        type="text"
        placeholder="Nombre"
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value
          })
        }
      />

    </div>
  );
};

export default Profile;