import "../styles/Welcome.css";

function Welcome() {
  return (
    <div className="welcomeCon">
      <p className="welcomeIntroSent">
        Let’s find you the scholarship that suits you best!
      </p>
      <div className="welcomeSearchCon">
        <input type="text" placeholder="Degree, Countery , Universty" />
        <p>Search</p>
      </div>
      <p className="welcomeJoinBtn">Join us :)</p>
      <p className="welcomeLogin">Already have an account? Log in</p>
    </div>
  );
}

export default Welcome;
