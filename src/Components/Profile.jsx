import profileImg from "../assets/profile.png";

const Profile = () => {
  return (
    <section className="profile">
      <h1>Profile</h1>

      <div className="profile-card">
        <img
          src={profileImg}
          alt="Abdullah Anwar"
          style={{ 
            width: "170px", 
            height: "170px", 
            borderRadius: "50%", 
            objectFit: "cover",
            border: "5px solid #333",
            marginBottom: "15px"
          }}
        />

        <h2>Abdullah Anwar</h2>
        <p>React Developer</p>
        <p>Karachi, Pakistan</p>
      </div>
    </section>
  );
};

export default Profile;