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
    </>
  );
}
export default Trends;
