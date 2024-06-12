import { Link } from "react-router-dom";
const Footer = () => {
  const linkstyle = {
    textDecoration: "None",
    fontSize: "20px",
    color: "white",
  };
  return (
    <div>
      <div
        className="linkblock"
        style={{ display: "flex", marginLeft: "120vh" }}
      >
        <div
          className="product"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h3 style={{ color: "white" }}>product</h3>
          <ul>
            <li>
              <Link style={{ ...linkstyle }} to={"/Dom"}>
                Doc
              </Link>
            </li>
            <li>
              <Link style={{ ...linkstyle }} to={"/waitlist"}>
                waitlist
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="info"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h3 style={{ color: "white" }}>Info</h3>
          <ul>
            <li>
              <Link style={{ ...linkstyle }} to={"/home"}>
                Home
              </Link>
            </li>
            <li>
              <Link style={{ ...linkstyle }} to={"/waitlist"}>
                waitlist
              </Link>
            </li>
            <li>
              <Link style={{ ...linkstyle }} to={"/aboutus"}>
                About us
              </Link>
            </li>
            <li>
              <Link style={{ ...linkstyle }} to={"/community"}>
                Community
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="mainhead"
        style={{ color: "white", fontSize: "60px", textAlign: "center" }}
      >
        <h1>Semi Hyphen</h1>
      </div>
    </div>
  );
};

export default Footer;
