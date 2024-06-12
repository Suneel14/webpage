const Blockfour = () => {
  const bs = {
    marginLeft: "45vh",
  };
  const ibs = {
    height: "8vh",
    width: "20vh",
  };
  return (
    <div>
      <div
        className="h"
        style={{ color: "white", textAlign: "center", marginTop: "15vh" }}
      >
        <div className="wording">
          <h3> Join Our Community</h3>
          <h1>SignUp and Follow our </h1>
          <h1>Community Pages</h1>
        </div>
        <div className="links" style={{ display: "flex", marginLeft: "30vh" }}>
          <div className="but1">
            <button type="submit" style={{ ...ibs }}>
              Twitter
            </button>
          </div>
          <div className="but2" style={{ ...bs }}>
            <button type="submit" style={{ ...ibs }}>
              Telegram
            </button>
          </div>
          <div className="but3" style={{ ...bs }}>
            <button type="submit" style={{ ...ibs }}>
              Medium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockfour;
