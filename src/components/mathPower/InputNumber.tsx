import {FC, Dispatch, SetStateAction, ChangeEvent, useState} from 'react';

interface InputNumberProps {
  value: number | null;
  setNumber: Dispatch<SetStateAction<number>>;
  classes?: string,
  placeholder?: string
}

const InputNumber: FC<InputNumberProps> = ({value, setNumber, classes, placeholder}) => {
  const [alert, setAlert] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseFloat(e.target.value);

    if (Number.isFinite(newValue) || newValue === 0) {
      setNumber(newValue);
      setAlert(null);
    } else {
      setAlert(`Значення ${placeholder} некоректне`);
      setNumber(null);
    }
  };

  return (
    <>
      <input
        className={classes}
        value={value !== null ? value : ''}
        onChange={handleChange}
        placeholder={placeholder || '0'}
      />

      {alert && <p className="text-red-500">{alert}</p>}
    </>
  );
};

export default InputNumber;
