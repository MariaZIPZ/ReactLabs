import {FC} from 'react';

import Square from './Square';

interface BoardProps {
  squares: Array<string | null>;
  onClick: (i: number) => void;
}

const Board: FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="flex flex-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="flex flex-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;