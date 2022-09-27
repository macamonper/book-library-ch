import user from "../../images/user.png";
const SideBarCard = () => {
  return (
    <div className="sideBarCard">
      <img src={user} alt="user"></img>
      <div>
        <h4>Britney Spears</h4>
        <h4>Birthday: 08/20</h4>
        <h4>Address: Avellaneda 931</h4>
      </div>
    </div>
  );
};

export default SideBarCard;
