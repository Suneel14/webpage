import "./B3.css";
const BlockThree = () => {
  return (
    <div>
      <div className="m">
        <div className="top" style={{ display: "flex", marginLeft: "12vh" }}>
          <div className="head">
            <h1>
              Getting Started<br></br> with Semi Hyphen
            </h1>
          </div>
          <div className="but" style={{ marginLeft: "95vh" }}>
            <button
              style={{ width: "18vh", height: "6vh", marginTop: "3vh" }}
              type="submit"
            >
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="bottom">
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="swap" style={{ marginLeft: "13vh" }}>
              <h1>Swap</h1>
              <h4>
                Lorem ipsum dolar sit amet,consectetur<br></br>
                adipiscing elit. Ut congue vestibulum posuere.<br></br>
                Vestibulum leo diam, efficitur non flis id,
                <br />
                feugait condimentum neque
              </h4>
            </div>
            <div className="liquidity" style={{ marginLeft: "25vh" }}>
              <h1>Liquidity</h1>
              <h4>
                Lorem ipsum dolor sit amet,consectetur <br />
                adipiscing eli. Ut congue vestibulum posuere. <br />
                Vestibulum leo diam.
              </h4>
            </div>
            <div className="bridge" style={{ marginLeft: "25vh" }}>
              <h1>Bridge</h1>
              <h4>
                Lorem ipsuum dolor sit amet,consectetur <br />
                adipiscing elit. Ut congue vestibulum posuere <br />
                Vestibulum leo diam, efficitur non felis id, <br />
                feugait condimentum neque.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockThree;
