import "../styles/SignUp.css";

function SignUp() {
  return (
    <div className="SignUpCon">
      <p className="signUpTitle">Create your account</p>
      <div style={{ display: "flex" }}>
        <div className="signUpHalf">
          <div className="SignUpInput">
            <p className="signUpInputText">Name</p>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="SignUpInput">
            <p className="signUpInputText">Birthday</p>
            <input type="Date" />
          </div>
          <div className="SignUpInput">
            <p className="signUpInputText">Email</p>
            <input type="text" placeholder="Enter your email" />
          </div>
        </div>
        <div className="signUpHalf">
          <div className="SignUpInput">
            <p className="signUpInputText">Interests</p>
            <input type="text" />
          </div>
          <div className="SignUpInput">
            <p className="signUpInputText">Password</p>
            <input type="password" placeholder="Enter a strong password" />
          </div>
          <div className="SignUpInput">
            <p className="signUpInputText">Confirm Password</p>
            <input type="password" placeholder="Confirm your password" />
          </div>

          <p className="signUpBtn">Sign Up</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
