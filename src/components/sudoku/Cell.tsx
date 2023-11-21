import {FC} from 'react';

import getCellsBlockId from "@/helpers/sudoku/getCellsBlockId";

interface SudokuCellProps {
  index: number;
  selected: boolean;
  onClick: () => void;
}

const Cell: FC<SudokuCellProps> = ({index, selected, onClick}) => {
  const borderRight = (index + 1) % 9 !== 0 ? '1px solid black' : 'none';
  const blockId = getCellsBlockId(index)

  return (
    <td
      onClick={onClick}
      style={{borderRight}}
      className={`cell block${blockId}-sudoku ${selected ? 'selected' : ''}`}
    >

    </td>
  );
};

export default Cell;
