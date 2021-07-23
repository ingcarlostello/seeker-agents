/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";

// @Packages
import Swal from "sweetalert2";

// export const AgentsContext = React.createContext<string | undefined | boolean | void >(undefined)
export const AgentsContext = createContext<any>(null)



const AgentsProvider = (props: any) => {
  const [agentsList, setAgentsList] = useState<any[]>([]);
  const [filteredAgentsByMoney, setFilteredAgentsByMoney] = useState<any[]>([]);
  const [agentSeekerPage, setAgentSeekerPage] = useState(true);
  const [income, setIncome] = useState<number>();
  const [firtsThreeAgents, setFirtsThreeAgents] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState(String);
  const [seeMore, setSeeMore] = useState(0);
  const [seeLess, setSeeLess] = useState(0);

  const selectCategory = (orderBy: string) => {
    if (orderBy === "lowIncome") {
      setCategory(orderBy);
      return;
    } else if (orderBy === "highIncome") {
      setCategory(orderBy);
      return;
    } else if (orderBy === "alphabetically") {
      setCategory(orderBy);
      return;
    }
  };

 const seeMoreAgents = () => {
    setSeeMore(seeMore + 1);
    if (firtsThreeAgents.length === filteredAgentsByMoney.length) {
      Swal.fire("There are no more agents in this search.");
      return;
    } else {
      setCount(count + 3);
    }
  };

  const seeLessAgents = () => {    
    if (firtsThreeAgents.length <= 3) {
      Swal.fire("They are the 3 first agents of the list");
      return;
    } 
    setSeeLess(seeLess + 1);
  };

  useEffect(() => {
    const getAllAgents = async () => {
      // let response = await fetch("http://localhost:3000/AGENTS_LIST.json");
      let response = await fetch("https://quizzical-stonebraker-367287.netlify.app/AGENTS_LIST.json");
      let result = await response.json();
      setAgentsList(result);
    };
    getAllAgents();
  }, []);

  const filterAgents = (amountMoney:number) => {
    if (amountMoney) {
      setIncome(amountMoney);
      const filterAgents = agentsList.filter(
        (agents) =>
          agents.income >= amountMoney - 10000 &&
          agents.income <= amountMoney + 10000
      );
      setFilteredAgentsByMoney(filterAgents);
    }
    setAgentSeekerPage(false);
  };









  //* <--Get First Three Agents-->
  useEffect(() => {
    const getFirstThreeAgents = () => {
      let firstThree = filteredAgentsByMoney.slice(0, firtsThreeAgents.length + 3);
      setFirtsThreeAgents(firstThree);
    };
    getFirstThreeAgents();
  }, [income, seeMore]);









  //* <--Delete last Three Agents-->
  useEffect(() => {
    const showLeesAgentsOnlist = () => {
      let showLessThree = firtsThreeAgents.slice(0, firtsThreeAgents.length - 3);
      setFirtsThreeAgents(showLessThree);
    };
    showLeesAgentsOnlist();
  }, [seeLess]);


  















  //* <--Order Agents Alphabetically-->
  useEffect(() => {
    setCategory("");
    const orderAgenstAlphabetically = () => {
      if (category === "alphabetically" || category === "") {
        let alphabetically = firtsThreeAgents.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          }
          return 0;
          // return setFirtsThreeAgents(alphabetically);
        });
        setFirtsThreeAgents(alphabetically);
      }
    };
    orderAgenstAlphabetically();
  }, [category]);

  //* <--Order Agents by low Income-->
  useEffect(() => {
    const lowIncomeFirts = () => {
      if (category === "lowIncome") {
        let x = firtsThreeAgents.sort((a, b) => a.income - b.income);
        setFirtsThreeAgents(x);
      }
    };
    lowIncomeFirts();
  }, [category]);

  //* <--Order Agents by Hight Income-->
  useEffect(() => {
    const HightIncomeFirts = () => {
      if (category === "highIncome") {
        let z = firtsThreeAgents.sort((a, b) => b.income - a.income);
        setFirtsThreeAgents(z);
        return;
      }
    };
    HightIncomeFirts();
  }, [category]);



  

  return (
    <AgentsContext.Provider
      value={{
        //* state
        agentSeekerPage,
        agentsList,
        filteredAgentsByMoney,
        firtsThreeAgents,
        income,
        seeLess,
        seeMore,

        //* functions
        filterAgents,
        seeLessAgents,
        seeMoreAgents,
        selectCategory,
      }}
    >
      {props.children}
    </AgentsContext.Provider>
  );
};

export default AgentsProvider;
