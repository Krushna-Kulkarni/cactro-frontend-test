type UserType = {
  name: string;
  role: string;
  mood: string;
  pic: string;
};
const MoodCard = ({ user }: { user: UserType }) => {
  const { name, role, mood, pic } = user;
  return (
    <div className="mood-card">
      <div className="user">
        <div className="pic">
          <img src={pic} alt={name} />
        </div>

        <div className="details">
          <div className="name">{name}</div>
          <div className="role">{role}</div>
        </div>
      </div>
      <div className="mood">
        <div>mood: {mood}</div>
      </div>
    </div>
  );
};

export default MoodCard;
