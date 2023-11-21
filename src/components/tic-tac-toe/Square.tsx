import {FC} from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: FC<SquareProps> = ({ value, onClick }) => (
  <button
    className="w-20 h-20 bg-gray-200 order border-red-500 m-1 flex items-center justify-center text-3xl font-bold"
    onClick={onClick}>
    {value}
  </button>
);

export default Square;