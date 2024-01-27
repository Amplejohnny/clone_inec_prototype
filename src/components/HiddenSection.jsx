import { useState } from "react";
import Section from "./Section";

const peopleData = [
  {
    id: 1,
    nin: 52340067,
    name: "John",
    email: "sampleemail@gmail.com",
    origin: "Lagos",
  },
  {
    id: 2,
    nin: 52340068,
    name: "Odule",
    email: "oddemail@gmail.com",
    origin: "Ibadan",
  },
  {
    id: 3,
    nin: 52340069,
    name: "segun",
    email: "wemimo@gmail.com",
    origin: "Abuja",
  },
];

const MainHiddenDiv = ({ handleClick }) => {
  const [searchData, setSearchData] = useState("");
  const [allresult, setAllResult] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleCheckData = () => {
    if (searchData.trim() !== "") {
      const result = peopleData.filter(
        (point) => point?.nin && point?.nin.toString() === searchData.trim()
      );
      setAllResult(result);
      setSearched(true);
    } else {
      setAllResult([]);
      setSearched(false);
    }
  };

  return (
    <div className="hidden-div justify-between border">
      <div className="d-flex justify-between">
        <input
          type="text"
          id="search"
          placeholder="Input Your 8 digits NIN pin... (52340067)"
          className="rounded p-2 px-3 outline-none border w-80"
          onChange={(event) => setSearchData(event.target.value)}
        />
        <button
          className={`hidden-status-button p-2 px-3 outline-none rounded w-17 ${
            event.target.value.length > 0 ? "hidden-status-button2" : ""
          }`}
          onClick={handleCheckData}
        >
          CHECK DATA
        </button>
      </div>
      <div>
        {allresult.length > 0 ? (
          allresult.map((result) => (
            <div key={result.id}>
              <p>NIN: {result?.nin}</p>
              <p>Name: {result?.name}</p>
              <p>Email: {result?.email}</p>
              <p>Origin: {result?.origin}</p>
            </div>
          ))
        ) : searched ? (
          <p>No data found</p>
        ) : null}
      </div>
      <div className="go-back-div d-flex justify-between items-center">
        <button className="go-back-button rounded" onClick={handleClick}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

const HiddenSection = () => {
  const [showDiv, setShowDiv] = useState(true);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>{showDiv ? <MainHiddenDiv handleClick={handleClick} /> : <Section />}</>
  );
};

export default HiddenSection;
