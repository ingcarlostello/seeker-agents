// @React
import React, { useContext, useEffect, useState } from "react";

// @Components
import AgentCard from "../components/AgentCard";
import AgentCardMobile from "../components/AgentCardMobile";
import OrderAgentsBy from "../components/OrderAgentsBy";
import SeeMoreSeeLess from "../components/SeeMore_SeeLess";

// @Context
import { AgentsContext } from "../context/AgentsContext";

// @labels
import { labels } from "../labels/labels";

const AgentList = () => {
  const { income, firtsThreeAgents, filteredAgentsByMoney, seeLess, seeMore } =
    useContext(AgentsContext);
  const [mobile, setMobile] = useState<boolean>();
  const match = window.matchMedia("(max-width: 700px)");

  useEffect(() => {
    let checkMobileMode = (e: any) => {
      if (e.matches) {
        setMobile(true);
        return;
      } else {
        setMobile(false);
      }
    };
    checkMobileMode(match);
    match.addListener(checkMobileMode);
  }, [match]);

  return (
    <>
      <div>
        <div className="mt-8">
          <p className="text-3xl font-bold text-gray-600 font-sans text-center mb-4">
            {labels.yourMatches}
          </p>
          <p className="text-lg font-sans text-gray-600 text-center mb-14">
            {labels.yourIncome}: <strong>${income}</strong>{" "}
          </p>
        </div>

        <div className="grid ">
          <div className="px-8 md:px-auto lg:mx-12">
            <OrderAgentsBy />
          </div>

          {filteredAgentsByMoney.length === 0 ? (
            <div className=" text-3xl font-bold text-gray-600 font-sans text-center my-12">
              There are not agents to this income value
            </div>
          ) : null}

          <div className="grid sm:grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {firtsThreeAgents.map((filterAgent: any) => (
              <div key={filterAgent.id} className="animate__animated animate__fadeIn">
                {mobile ? (
                  <AgentCardMobile
                    agentAvatar={filterAgent.avatar}
                    agentId={filterAgent.id}
                    agentIncome={filterAgent.income}
                    agentName={filterAgent.name}
                  />
                ) : (
                  <AgentCard
                    agentAvatar={filterAgent.avatar}
                    agentId={filterAgent.id}
                    agentIncome={filterAgent.income}
                    agentName={filterAgent.name}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 justify-items-end pr-20 mt-12">
            <div className="mb-16">
              <SeeMoreSeeLess />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentList;
