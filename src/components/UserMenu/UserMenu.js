import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import defaultAvatar from "../../images/avatar.png";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={s.UserMenu}>
      <img src={avatar} alt="" width="25" className={s.UserMenuAvatar} />
      <span className={s.UserMenuText}>Welcome {name}!</span>
      <button
        type="button"
        className={s.UserMenuButton}
        onClick={() => dispatch(authOperations.logout())}
      >
        Log Out
      </button>
    </div>
  );
}
