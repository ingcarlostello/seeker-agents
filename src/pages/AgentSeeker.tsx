// @React
import React from "react";

// @assets
import usersImage from "../assets/users.png";

// @Components
import CurrentIncome from "../components/CurrentIncome";

// @Labels
import { labels } from "../labels/labels";

const AgentSeeker = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center px-8">
        <div className="grid justify-items-stretch">
          <div className="justify-self-center mb-6">
            <img className="h-8 w-auto sm:h-10" src={usersImage} alt="zoe" />
          </div>
          <div className="grid justify-items-center">
            <p className="text-3xl font-bold text-gray-600 font-sans mb-4">
              {labels.findBestAgent}
            </p>
            <p className="text-base font-sans text-center mb-14">
              {labels.fillInformation}
            </p>
          </div>
          <div>
            <CurrentIncome />
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentSeeker;
