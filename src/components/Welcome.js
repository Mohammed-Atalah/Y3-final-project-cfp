import "../styles/Welcome.css";

function Welcome() {
  return (
    <div className="welcomeCon">
      <p className="welcomeIntroSent">
        Let’s find you the scholarship that suits you best!
      </p>
      <div className="welcomeSearchCon">
        <input type="text" placeholder="..." />
        <p>Search</p>
      </div>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          "justify-content": "space-around",
        }}
      >
        {/* <p className="welcomeJoinBtn">Join us :)</p>
        <p className="welcomeLogin">Already have an account? Log in</p> */}
      </div>
    </div>
  );
}

export default Welcome;
