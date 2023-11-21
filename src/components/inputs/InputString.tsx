import {FC, ChangeEvent} from 'react';

import InputStringState from "@/types/inputs/InputStringState";

const InputString: FC<InputStringState> = ({value, maxLength, classes, placeholder, setValue, inputRef}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;

    if (newValue.length <= maxLength) {
      setValue(newValue);
    } else {
      setValue(prevState => prevState)
    }
  };

  return (
    <>
      <input
        className={classes}
        ref={inputRef || undefined}
        type="text"
        maxLength={maxLength}
        value={value !== null ? value : ''}
        onChange={handleChange}
        placeholder={placeholder || ''}
      />
    </>
  );
};

export default InputString;