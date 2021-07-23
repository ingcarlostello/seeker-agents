// @React
import React from "react";

const AgentCardMobile = ({
  agentAvatar,
  agentId,
  agentIncome,
  agentName,
}: any) => {
  return (
    <>
      <div className="max-w-2xl bg-white  p-5 rounded-md tracking-wide shadow-xl">
        <div id="header" className="flex items-center">
          <img src={agentAvatar} alt={agentName} />
          <div id="body" className="flex  flex-col pl-6">
            <p id="name" className="text-xl font-bold font-sans text-gray-700">
              {agentName}
            </p>
            <p id="job" className="text-gray-800 font-sans">
              ID: {agentId}
            </p>
            <div className="flex">
              <p className="font-sans ">
                Income:{" "}
                <strong className="text-gray-700 font-bold">${agentIncome}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentCardMobile;
