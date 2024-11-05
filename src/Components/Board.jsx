import React ,{useState} from 'react'
import Square from './Square.jsx'


function Board() {

const [state , setState] = useState(Array(9).fill(null))
const [isX , setX] = useState(true)

const checkWinner = () =>{
    const winnerLogic = [
        [0 , 1 ,2] , 
        [3 , 4 , 5] ,
        [6 , 7 , 8] ,
        [0 , 3 , 6] ,
        [1, 4 , 7] ,
        [2, 5 , 8] ,
        [0, 4 , 8] ,
        [2, 4 , 6] ,
    ];

    for(let logic of winnerLogic){
        const [a ,b , c] = logic
        if(state[a]!=null & state[a] == state[b] & state[a] == state[c]){
            return true;
        }
    }
    return false;
}

const winner = checkWinner();

const handleClick = (index) =>{
    console.log(index);
    const copy = [...state];
    copy[index] = isX ? "X" : "0";
    setState(copy); 
    setX(!isX); 
}

  return (
    <>
    {winner ? (<>

    { isX ? (
        <div>O win</div>
    ) : (<div> X win </div>)}

     </>) : (

        <div className='flex justify-center items-center m-20'>
            <h1 className='grid grid-cols-3 border-4 border-gray-600'>
            <div className="h-20 w-20 border-4 border-gray-600 flex items-center justify-center text-xl" onClick={()=> handleClick(0)} > <Square value = {state[0]} /> </div>
            <div className="h-20 w-20 border-4 border-gray-600 flex items-center justify-center text-xl" onClick={()=> handleClick(1)} > <Square value = {state[1]}/> </div>
            <div className="h-20 w-20 border-4 border-gray-600 flex items-center justify-center text-xl" onClick={()=> handleClick(2)} > <Square value = {state[2]}/> </div>
            <div className="h-20 w-20 border-4 border-gray-600 flex items-center justify-center text-xl" onClick={()=> handleClick(3)} > <Square value = {state[3]}/> </div>
            <div className="h-20 w-20 border-4 border-gray-600 flex items-center justify-center text-xl" onClick={()=> handleClick(4)} > <Square value = {state[4]}/> </div>
            <div className="h-20 w-20 border-4 border-gray-600 flex items-center justify-center text-xl" onClick={()=> handleClick(5)} > <Square value = {state[5]}/> </div>
            <div className="h-20 w-20 border-4 border-gray-600 flex items-center justify-center text-xl" onClick={()=> handleClick(6)} > <Square value = {state[6]}/> </div>
            <div className="h-20 w-20 border-4 border-gray-600 flex items-center justify-center text-xl" onClick={()=> handleClick(7)} > <Square value = {state[7]}/> </div>
            <div className="h-20 w-20 border-4 border-gray-600 flex items-center justify-center text-xl" onClick={()=> handleClick(8)} > <Square value = {state[8]}/> </div>
            </h1>
            </div>
        )}
    </>
  )
}

export default Board
