import { Link } from "react-router-dom";
const Navbar = () => {
  const hs = {
    display: "flex",
    flexDirection: "row",
  };
  const lis = {
    listStyleType: "None",
    margin: "13px",
  };
  const linkstyle = {
    textDecoration: "None",
    fontSize: "20px",
  };
  const main = {
    display: "flex",
  };
  return (
    <div style={{ ...main }}>
      <div className="b1">
        <ul style={{ ...hs }}>
          <li style={{ color: "white", fontWeight: "800", ...lis }}>
            Semi Hiphen
          </li>
          <li style={{ ...lis }}>
            <Link style={{ color: "white", ...linkstyle }} to={"/Dom"}>
              Doc
            </Link>
          </li>
          <li style={{ ...lis }}>
            <Link style={{ color: "white", ...linkstyle }} to={"/waitlist"}>
              waitlist
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ marginLeft: "125vh" }} className="b2">
        <ul style={{ ...hs }}>
          <li style={{ ...lis }}></li>
          <li style={{ ...lis }}></li>
          <li style={{ ...lis }}>
            <button style={{ width: "20vh", height: "7vh" }} type="submit">
              Launch App
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
