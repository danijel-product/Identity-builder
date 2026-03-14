import React, {createContext, useState} from "react";

export const VoteContext = createContext()

export default function VoteProvider ({children}){

    const [betterVotes, setBetterVotes] = useState(0)
    const [sameVotes, setSameVotes] = useState(0)

    const addBetterVotes = () => {
        setBetterVotes(prev => prev + 1)
    }

    const addSameVotes = () => {
        setSameVotes(prev => prev + 1)
    }

    return(
        <VoteContext.Provider value={{
            betterVotes,
            sameVotes,
            addBetterVotes,
            addSameVotes
        }}>
            {children}
        </VoteContext.Provider> 
    )

}