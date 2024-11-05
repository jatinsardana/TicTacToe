import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Square = ({ value, onClick }) => {
  return (
    <motion.div
      className="h-20 w-20 border-4 border-gray-600 flex items-center justify-center text-4xl cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {value}
    </motion.div>
  );
};

function Boards() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isX, setX] = useState(true);

  const handleClick = (index) => {
    const copy = [...state];
    copy[index] = isX ? 'X' : 'O';
    setState(copy);
    setX(!isX);
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const winner = checkWinner();

  return (
    <div className="flex justify-center items-center m-20">
      <motion.div
        className="grid grid-cols-3 border-4 border-gray-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        {state.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </motion.div>
      <AnimatePresence>
        {winner && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <h1 className="text-4xl font-bold">
                {isX ? 'O is the winner!' : 'X is the winner!'}
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Boards;