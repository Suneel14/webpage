const Blockone = () => {
  const textStyle = {
    color: "white",
    margin: "0px",
  };
  const bstyle = {
    width: "20vh",
    height: "5vh",
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginLeft: "20vh" }}
    >
      <div className="bh3" style={{ ...textStyle }}>
        <h6>
          The Exchange needed on Xion<br></br>
          EveryThing awesome at one place
        </h6>
      </div>
      <div className="bh1" style={{ lineHeight: "0.5", ...textStyle }}>
        <h1>REFURBISHING THE</h1>
        <h1>REALM OF</h1>
        <h1>EXCHANGE</h1>
      </div>
      <div className="blbut" style={{ display: "flex" }}>
        <div className="b1">
          <button style={{ ...bstyle }} type="submit">
            Start Building
          </button>
        </div>
        <div className="b2" style={{ marginLeft: "5vh" }}>
          <button style={{ ...bstyle }} type="submit">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blockone;
