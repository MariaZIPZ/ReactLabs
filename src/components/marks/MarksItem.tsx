import {FC} from 'react';

import Mark from "@/types/marks/Mark";

const MarksItem: FC<Mark> = ({subject, mark}) => {
  return (
    <tr>
      <td className="py-2 px-4 border-b">{subject}</td>
      <td className={`py-2 px-4 border-b`}>{mark}</td>
    </tr>
  );
};

export default MarksItem;
