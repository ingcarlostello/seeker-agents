// @React
import React, { useState } from "react";

// @Components
import GetMatchesButton from "./GetMatchesButton";

// @Labels
import { labels } from "../labels/labels";

const CurrentIncome = () => {
  const [amountMoney, setAmountMoney] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    let price = value ;
    setAmountMoney(parseInt(price) || '');
  };

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {labels.currentIncome}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm mb-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="font-bold text-gray-600 text-lg">$</span>
          </div>
          <input
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-11 pl-7 pr-12 sm:text-sm border-2 border-gray-300 rounded-md"
            id="amountMoney"
            maxLength={5}
            name="amountMoney"
            onChange={handleChange}
            pattern="[0-9]"
            type="text"
            value={amountMoney}
          />
        </div>
        <div className="float-right">
          <GetMatchesButton amountMoney={amountMoney} />
        </div>
      </div>
    </>
  );
};

export default CurrentIncome;
