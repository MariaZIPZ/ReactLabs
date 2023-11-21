"use client"

import {FC} from 'react';

import Board from "@/components/sudoku/Board";

const Sudoku: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <Board/>
    </div>
  );
};

export default Sudoku;
