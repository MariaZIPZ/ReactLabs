import {Dispatch, SetStateAction, RefObject} from 'react';

export default interface InputStringState {
  value: string | null;
  setValue: Dispatch<SetStateAction<string>>;
  maxLength?: number
  classes?: string,
  placeholder?: string
  label?: string,
  inputRef?: RefObject<HTMLInputElement>;
}