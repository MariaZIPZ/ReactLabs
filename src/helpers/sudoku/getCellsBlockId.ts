const getBlockIndex = (cellId: number): number => {
  const row = Math.floor(cellId / 9);
  const col = cellId % 9;

  const blockRow = Math.floor(row / 3);
  const blockCol = Math.floor(col / 3);

  return blockRow * 3 + blockCol;
};

export default getBlockIndex;