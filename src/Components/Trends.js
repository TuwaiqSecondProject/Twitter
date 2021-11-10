import img1 from "../images/imgtrend1.jfif";

function Trends() {
  return (
    <>
      <div className="trends-container">
        <h2>Trends</h2>
        <div className="trends">
          <h3>Manchester United vs Manchester City</h3>
          <img src={img1} />
        </div>

        <div className="trends">
          <h3>#석진이_Yours_박박</h3>
          <img />
        </div>

        <div className="trends">
          <h3>Manchester United vs Manchester City</h3>
          <img src={img1} />
        </div>
      </div>

      <div className="follow-container">
        <h2>Who to follow</h2>
        <div className="trends">
          <h3>@Remma</h3>
          <button className="button1">follow</button>
        </div>

        <div className="trends">
          <h3>@Amal</h3>
          <button className="button1">follow</button>
        </div>

        <div className="trends">
          <h3>@FAhad</h3>
          <button className="button1">follow</button>
        </div>
        <span className="cc">
          Terms of Service Privacy Policy Cookie Policy Ads info More © 2021
          Twitter, Inc.
        </span>
      </div>
    </>
  );
}
export default Trends;
