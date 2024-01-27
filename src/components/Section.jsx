import HiddenSection from "./HiddenSection";
import { useState } from "react";

const MainDiv = ({ handleClick }) => {
  return (
    <section className="hero-section">
      <div className="work">
        <h1 className="welcome">Welcome!</h1>
        <p className="check">
          You can check the status of your registration by providing your
          details on the Voter Verification Service
        </p>
        <button className="status-button" onClick={handleClick}>
          CHECK STATUS
        </button>
      </div>
    </section>
  );
};

const Section = () => {
  const [showDiv, setShowDiv] = useState(true);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>{showDiv ? <MainDiv handleClick={handleClick} /> : <HiddenSection />}</>
  );
};

export default Section;
