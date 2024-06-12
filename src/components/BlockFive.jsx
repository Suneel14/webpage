const BlockFive = () => {
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          border: "2px solid blue",
          marginTop: "14vh",
          width: "165vh",
          marginLeft: "20vh",
          height: "55vh",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10vh",
          }}
        >
          <div className="line">
            <hr style={{ color: "white", width: "20vh" }} />
          </div>

          <div className="textline" style={{ color: "white" }}>
            <h1>NewsLetter</h1>
            <h5>
              Subscribe to thne semi Hyphen newsletter <br />
              to be updated with the ecosystem.
            </h5>
          </div>
        </div>
        <div
          className="fromblock"
          style={{ marginLeft: "80vh", lineHeight: "2.5" }}
        >
          <label htmlFor="email" style={{ color: "white" }}>
            Your email Address:
          </label>
          <br></br>
          <input type="email" name="email" id="email" placeholder="email" />
          <br />
          <button type="submit" style={{ height: "4vh", width: "20vh" }}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockFive;
