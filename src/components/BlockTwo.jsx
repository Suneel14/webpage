const BlockTwo = () => {
  const textStyle = {
    color: "white",
  };
  const bcstyle = {
    width: "50vh",
    height: "16vh",
    border: "2px solid skyblue",
    marginBottom: "8px",
  };
  return (
    <div>
      <div className="heading" style={{ textAlign: "center", ...textStyle }}>
        <h1>WaitList Programs Semi Hyphen</h1>
      </div>
      <div className="content" style={{ display: "flex", marginLeft: "20vh" }}>
        <div className="one" style={{ ...textStyle }}>
          <h6>Our Solutions</h6>

          <h1>Our WaitList Program</h1>

          <h2>The Following Options for</h2>

          <h3>Whitelist capturing.</h3>

          <h6>Wallet Confirmation. Token Acquisition. NFT acquisition</h6>
        </div>
        <div className="two" style={{ lineHeight: "2", marginLeft: "70vh" }}>
          <div className="bc1" style={{ ...bcstyle }}>
            <ul>
              <li style={{ color: "white" }}>
                Join waitlist using your<br></br> wallet address or with your
                email.
              </li>
            </ul>
          </div>
          <div className="bc2" style={{ ...bcstyle }}>
            <ul>
              <li style={{ color: "white" }}>
                Should stake 20,000 SCLX tokens
              </li>
            </ul>
          </div>
          <div className="bc3" style={{ ...bcstyle }}>
            <ul>
              <li style={{ color: "white" }}>Should have Scalex Bot NFT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTwo;
