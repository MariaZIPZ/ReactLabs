import {FC, ChangeEvent} from 'react';

import InputNumberState from "@/types/inputs/InputNumberState";

const InputNumber: FC<InputNumberState> = ({value, setNumber, maxValue, minValue, classes, placeholder}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseFloat(e.target.value);

    if (Number.isFinite(newValue) || newValue === 0) {
        setNumber(newValue);
    } else {
      setNumber(null);
    }
  };

  return (
    <>
      <input
        className={classes}
        type="number"
        min={minValue && minValue}
        max={maxValue && maxValue}
        value={value !== null ? value : ''}
        onChange={handleChange}
        placeholder={placeholder || ''}
      />
    </>
  );
};

export default InputNumber;