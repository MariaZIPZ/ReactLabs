import {FC, useState} from 'react';

import Cell from "@/components/sudoku/Cell";

const Board: FC = () => {
  const [selectedCell, setSelectedCell] = useState<number | null>(null);

  const handleCellClick = (index: number) => {
    if (selectedCell === index) {
      setSelectedCell(null);
    } else {
      setSelectedCell(index);
    }
  };

  return (
    <table className="flex items-center justify-center p-2 sudoku-board divide-y divide-x divide-gray-500">
      <tbody>
      {[...Array(9).keys()].map((row) => (
        <tr key={row} className="flex flex-column">
          {[...Array(9).keys()].map((col) => {
            const index = row * 9 + col;

            return (
              <Cell
                key={index}
                index={index}
                selected={selectedCell === index}
                onClick={() => handleCellClick(index)}
              />
            );
          })}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Board;
