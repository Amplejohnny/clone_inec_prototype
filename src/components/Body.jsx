import inecChairman from "../static/welcome2.jpg";

const Body = () => {
  return (
    <div className="section">
      <h1 className="message opacity">Message from the INEC Chairman</h1>
      <div className="inec">
        <img src={inecChairman} alt="Inec Chairman" className="chairman" />
        <div className="rants">
          <p>
            I am pleased to introduce the Commission&apos;s online portal for
            the Continuous Voter Registration (CVR).
          </p>{" "}
          <br />
          <p>
            Since the resumption of voter registration on a continuous basis in
            2017, the Commission has been looking at ways to make voter
            registration easier, more accessible, and user-friendly not only to
            the multitude of prospective registrants, but also to registered
            voters who may wish to transfer their registration or have had their
            Permanent Voters Cards (PVCs) missing or defaced. This is one of the
            Commission&apos;s innovations to enhance voter experience by making
            the registration exercise faster, easier, and less crowded than
            before. Given the lingering COVID-19 situation, the new registration
            solution will help decongest registration centers, reduce delays,
            and allow prospective registrants to schedule appointments and
            monitor their applications from the comfort of their homes.
          </p>{" "}
          <br />
          <p>
            The portal allows a two-step registration process in which first,
            prospective registrants login to pre-register by providing their
            basic biodata and some biometrics and second to complete the
            registration by physically presenting themselves at a designated
            registration center of their choice.
          </p>{" "}
          <br />
          <p>
            This considerably eases the process as a substantial part of the
            exercise would have been completed online before physical contact
            with registration officials. I urge all eligible Nigerians to take
            advantage of the services offered by the Commission through this
            portal.
          </p>{" "}
          <br />
          <h4>Professor Mahmood Yakubu</h4>
          <p>Chairman, Independent National Electoral Commission.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
