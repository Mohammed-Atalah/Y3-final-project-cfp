import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footerCon">
      <div className="footerReachCon">
        <p className="footerTitle">Reach out to us</p>
        <div style={{ display: "flex" }}>
          <img
            className="footerIcone"
            src={require("../images/telephoneLogo.png")}
          />
          <p>+970-59X-XXX-XXX</p>
          <a style={{ display: "flex", "align-items" : "center"}} target="__blank" href="email:hind.wihaidi05@gmail.com">
            <img
              className="footerIcone"
              src={require("../images/mailLogo.png")}
            />
            <p>help@westemitcfp.com</p>
          </a>
        </div>
      </div>
      <div className="footerFollowCon">
        <p className="footerTitle">Follow us</p>
        <a target="__blank" href="https://www.instagram.com/hindwihaidi">
          <img
            style={{ "margin-left": "20px" }}
            className="footerIcone"
            src={require("../images/instagramLogo.png")}
          />
        </a>
        <a href="https://www.linkedin.com/in/hind-wihaidi-6b949a205/">
          <img
            className="footerIcone"
            src={require("../images/linkedinLogo.png")}
          />
        </a>
        <a target="__blank" href="https://twitter.com/hindwihaidi">
          <img
            className="footerIcone"
            src={require("../images/twitterLogo.png")}
          />
        </a>
        <a target="__blank" href="https://www.facebook.com/hind.wihaidi.7">
          <img
            className="footerIcone"
            src={require("../images/facebookLogo.png")}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
