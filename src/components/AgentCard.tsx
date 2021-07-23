// @React
import React from "react";

const AgentCard = ({ agentName, agentId, agentIncome, agentAvatar }: any) => {
  return (
    <>
      <div
        className="shadow-xl rounded-lg overflow-hidden w-72 h-80 grid pb-5 "
        style={{ background: "#F5F5F5" }}
      >
        <div className="bg-white h-60 grid place-items-center pt-4">
          <img src={agentAvatar} alt={agentName} />
          <div className="p-4 grid">
            <p className="tracking-wide text-sm font-bold text-gray-600 text-xl font-sans place-self-center">
              {agentName}
            </p>
            <p className="text-gray-600 text-base font-sans place-self-center">
              ID: {agentId}
            </p>
          </div>
        </div>
        <p className="place-self-center">
          Income: <strong className="text-gray-600">${agentIncome}</strong>
        </p>
      </div>
    </>
  );
};

export default AgentCard;
