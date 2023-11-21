import {FC} from 'react';

import Mark from "@/types/marks/Mark";
import MarksItem from "@/components/marks/MarksItem";

interface MarksTableProps {
  marks: Mark[];
}

const MarksTable: FC<MarksTableProps> = ({marks}) => {
  const averageMark = marks.reduce((acc, subject) => acc + subject.mark, 0) / marks.length;

  return (
    <div>
      <table className="min-w-full mt-8 bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Предмет</th>
            <th className="py-2 px-4 border-b">Оцінка</th>
          </tr>
        </thead>

        <tbody>
          {marks.map((subject, index) => (
            <MarksItem
              key={index}
              mark={subject.mark}
              subject={subject.subject}
            />
          ))}

          <tr>
            <td className="py-2 bg-gray-200 px-4 border-b font-bold">Середній бал</td>
            <td className={`py-2 px-4 border-b font-bold`}>{averageMark.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MarksTable;
