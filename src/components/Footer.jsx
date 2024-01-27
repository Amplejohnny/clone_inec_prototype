import inecSticker from "../static/logo.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="indent">
        <div className="independent">
          <img src={inecSticker} alt="logo-footer" className="logo-footer" />
          <p className="center">
            The Independent National Electoral Commission (INEC) was established
            by the 1999 Constitution of the Federal Republic of Nigeria to
            organize elections in various political offices in the country.
          </p>
        </div>
      </div>
      <div className="indent2">
        <div className="contact">
          <p className="thick">Contact</p>
          <ul className="ul-style">
            <li className="website">
              <a className="acontact" href="/contact">
                iccc@inec.gov.ng
              </a>
            </li>
            <li className="policy">
              <a className="acolor" href="/contact2">
                0700-2255-4632
              </a>
            </li>
          </ul>
        </div>
        <div className="quicklink">
          <p className="thick">Quick Links</p>
          <ul className="ul-style">
            <li className="website">
              <a className="acolor" href="/inecwebsite">
                Visit INEC Website
              </a>
            </li>
            <li className="policy">
              <a className="acolor" href="/voterportal">
                Voter Verification Portal
              </a>
            </li>
            <li className="policy">
              {" "}
              <a className="acolor" href="/quicklink">
                Privacy Policy, Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
