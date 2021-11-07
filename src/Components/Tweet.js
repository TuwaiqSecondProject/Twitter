function Tweet(UserId, Content, date, numberOfLikes) {
  console.log(UserId);
  return (
    <>

      <div className="post-container">
        <div className="post">
          <div className="header">
            <div>
              <p>{UserId.date}</p>
            </div>
            <div>
              <p>user name: {UserId.UserId}</p>
            </div>
          </div>
          <div className="contetnt">
            <p>{UserId.Content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tweet;
