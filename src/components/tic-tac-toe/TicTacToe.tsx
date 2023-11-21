"use client"
import {FC, useState} from 'react';
import Board from './Board';

const TicTacToe: FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const newSquares = squares.slice();

    if (newSquares[i] || getWinner(newSquares)) {
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = getWinner(squares);

  let status;
  if (winner) {
    status = `Перемога: ${winner}`;
  } else if (squares.every(square => square !== null)) {
    status = 'Нічия!';
  } else {
    status = `Хід: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <Board squares={squares} onClick={handleClick} />
      </div>

      <div className="w-1/2 p-4">
        <div className="font-bold mb-2">{status}</div>

        <button
          className="bg-yellow-400 border border-yellow-500 px-4 py-2 rounded text-white font-semibold"
          onClick={handleReset}
        >
          Очистити
        </button>
      </div>
    </div>
  );
};

function getWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    // if all three squares in the line are filled in and identical
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
