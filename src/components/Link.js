import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    // ALLOW USERS TO CMD OR CTRL CLICK ON A LINK TO OPEN IN A NEW TAB
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className="cursor-pointer" onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
