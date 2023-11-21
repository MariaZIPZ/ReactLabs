import {FC} from 'react';

import InputNumberState from "@/types/inputs/InputNumberState";
import InputStringState from "@/types/inputs/InputStringState";
import InputNumber from "@/components/inputs/InputNumer";
import InputString from "@/components/inputs/InputString";

interface VirtualizedListInputsProps {
  inputNumbersList: InputNumberState[];
  searchInput: InputStringState
}

const VirtualizedListInputs: FC<VirtualizedListInputsProps> = ({inputNumbersList, searchInput}) => {
  return (
    <div className="flex items-center p-4 mb-4">
      <div className="mr-12">
        <label className="text-gray-800 mb-2" htmlFor={`input-search`}>{searchInput.label}</label>

        <InputString {...searchInput} classes="w-[200px] ml-2 mt-2 bg-transparent border-b border-gray-300 focus:outline-none"/>
      </div>

      {inputNumbersList.map((input, index) => (
        <div key={index} className="mr-12">
          <label className="text-gray-800 mb-2" htmlFor={`input-${index}`}>{input.label}</label>

          <InputNumber {...input} classes="w-[80px] ml-2 mt-2 bg-transparent border-b border-gray-300 focus:outline-none"/>
        </div>
      ))}
    </div>
  );
};

export default VirtualizedListInputs;
