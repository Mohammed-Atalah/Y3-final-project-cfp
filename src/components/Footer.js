import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footerCon">
      <div className="footerReachCon">
        <p className="footerTitle">Reach us</p>
        <div style={{ display: "flex" }}>
          <img
            className="footerIcone"
            src={require("../images/telephoneLogo.png")}
          />
          <p>+970-59X-XXX-XXX</p>
          <img
            className="footerIcone"
            src={require("../images/mailLogo.png")}
          />
          <p>help@westemitcfp.com</p>
        </div>
      </div>
      <div className="footerFollowCon">
        <p className="footerTitle">Follow us</p>
        <img
          style={{ "margin-left": "20px" }}
          className="footerIcone"
          src={require("../images/instagramLogo.png")}
        />
        <img
          className="footerIcone"
          src={require("../images/linkedinLogo.png")}
        />
        <img
          className="footerIcone"
          src={require("../images/twitterLogo.png")}
        />
        <img
          className="footerIcone"
          src={require("../images/facebookLogo.png")}
        />
      </div>
    </div>
  );
}

export default Footer;
