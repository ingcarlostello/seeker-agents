// @React
import React, { useContext } from "react";

// @Context
import { AgentsContext } from "../context/AgentsContext";

// @Labels
import { labels } from "../labels/labels";


const SeeMore_SeeLess = () => {
    const { seeMoreAgents, seeLessAgents }:any = useContext(AgentsContext);

    return (
        <>
            <div>
                <span
                    className="mr-5 font-bold cursor-pointer"
                    onClick={() => seeLessAgents()}
                    style={{ color: "#5C7BEB" }}
                >
                    {labels.showLess} <span className="ml-4">-</span>
                </span>
                <span
                    className="font-bold cursor-pointer"
                    onClick={() => seeMoreAgents()}
                    style={{ color: "#5C7BEB" }}
                >
                    {labels.showMore} <span className="ml-4">+</span>
                </span>
            </div>
        </>
    );
};

export default SeeMore_SeeLess;
