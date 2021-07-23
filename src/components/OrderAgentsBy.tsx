// @React
import React, { useContext } from "react";

// @Context
import { AgentsContext } from "../context/AgentsContext";

// @Labels
import { labels } from "../labels/labels";



const OrderAgentsBy = () => {
  const { selectCategory }:any = useContext(AgentsContext);

  return (
    <>
      <p className="text-base font-sans">Order agents by</p>

      <select
        className="focus:ring-indigo-500 focus:border-indigo-500 lg:w-56 sm:text-sm border-2 border-gray-300 rounded-md h-12 w-full"
        onChange={(e) => selectCategory(e.target.value)}
      >
        <option value="">
          {labels.select}
        </option>
        <option className="p-5" value="alphabetically">
          {labels.aZ}
        </option>
        <option className="h-40" value="highIncome">
         {labels.incomeHf}
        </option>
        <option className="h-12" value="lowIncome">
          {labels.incomelf}
        </option>
      </select>
    </>
  );
};

export default OrderAgentsBy;
