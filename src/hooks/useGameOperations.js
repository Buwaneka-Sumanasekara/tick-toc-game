import { useState } from "react";


const getInitialBoxes=()=>{
    return Array(9).fill(null)     
}

const WINNING_COMBINATIONS=[
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]


const useGameOperations = () => {
    const [board,setBoard]=useState(getInitialBoxes())
    const [isTurnX,setIsTurnX]=useState(true)

    const onResetBoard= ()=> {
        setBoard(getInitialBoxes())
    }
    const handleOnPress=(index)=>{
        if(!!board[index]) return 

        if(hasAWinner()) return

        const value=(isTurnX?"X":"O");

        board[index]=value;
        setBoard(board);
        setIsTurnX(!isTurnX)

    }

    const calculateWinner = () => {
        for (let index = 0; index < WINNING_COMBINATIONS.length; index++) {
            const combination = WINNING_COMBINATIONS[index];
            
            const [a,b,c]=combination;
            if(!!board[a] && (board[a]===board[b] && board[a]===board[c])){
                return {winner:board[a],combination};
            }
        }
        return null;
    }

    const hasAWinner = () => {
        return !!calculateWinner()
    }

    const checkIsGameEnded = () => {
        for (let index = 0; index < board.length; index++) {
            const element = board[index];

            if(!element) return false;
        }

        return true;
    }

    const getDisplayMessage=()=>{
 
        const v=calculateWinner();
        if(v===null) return `Its ${isTurnX?"X":"O"} 's turn`;
        if(checkIsGameEnded()) return "Game ended"
        return `${v?.winner} is the winner`
    }

    const getWinCombination = () => {
        const v=calculateWinner();

        return v?.combination || null
    }
   
    return {
        board,
        onResetBoard,
        handleOnPress,
        getDisplayMessage,
        getWinCombination
    }
}

export default useGameOperations;

