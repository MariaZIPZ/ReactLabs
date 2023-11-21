import {Dispatch, SetStateAction} from 'react';

export default interface InputNumberState {
  value: number | null;
  setNumber: Dispatch<SetStateAction<number>>;
  maxValue?: number,
  minValue?: number,
  classes?: string,
  placeholder?: string
  label?: string
}