import {FC, useRef, useState, ReactNode} from 'react';

import PortalContainer from "../portal/PortalContainer";
import Portal from "../portal/Portal";
import {FULL_NAME, DATE_OF_REALIZATION, GROUP} from "../../constants";

const FeedbackForm: FC = () => {
  // Uncontrolled inputs
  const surnameRef = useRef(null);
  const firstNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(true);

  const [message, setMessage] = useState<ReactNode | null>(null);
  const [messageType, setMessageType] = useState<"error" | "success" | "warning" | null>(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const surname = surnameRef.current.value;
    const firstName = firstNameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;

    if (!surname || !firstName || !phone || !email) {
      setIsPortalOpen(true);
      setMessage(<p>Будь ласка, заповніть всі поля</p>);
      setMessageType('error');
      return;
    }

    if (!/^(\+38)?\d{10}$/.test(phone)) {
      setIsPortalOpen(true);
      setMessage(<p>Будь ласка, введіть коректний номер телефону - без пробілів та зайвих символів</p>);
      setMessageType('warning');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setIsPortalOpen(true);
      setMessage(<p>Будь ласка, введіть коректний email</p>);
      setMessageType('warning');
      return;
    }

    setIsPortalOpen(true);
    setMessage(
      <div>
        <div>
          <p className="font-bold">Форма успішно відправлена!</p>
          <p>Прізвище: {surname}</p>
          <p>Ім'я: {firstName}</p>
          <p>Телефон: {phone}</p>
          <p>Email: {email}</p>
        </div>

        <div className="mt-2">
          <p className="font-bold">Інформація про студента</p>
          <p>Ім'я: {FULL_NAME}</p>
          <p>Група: {GROUP}</p>
          <p>Дата виконання: {DATE_OF_REALIZATION}</p>
        </div>
      </div>
    );
    setMessageType('success');
    event.target.reset();
  }

  return (
    <div className="flex space-y-4 justify-center items-center" style={{flexDirection: 'column'}}>
      <h2 className="text text-2xl mt-8 font-bold">Форма зворотнього зв'язку</h2>

      <form onSubmit={handleSubmit} className="w-1/3 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="surname" className="block text-gray-700 text-sm font-bold mb-2 w-[0px]">
            Прізвище:
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            ref={surnameRef}
            className="text-left shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2 w-[0px]">
            Ім'я:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            ref={firstNameRef}
            className="text-left shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2 w-[0px]">
            Телефон:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            defaultValue="+38"
            ref={phoneRef}
            className="text-left shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 w-[0px]">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            className="text-left shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Відправити
          </button>
        </div>

        {message && (
          <PortalContainer>
            <Portal type={messageType} isOpen={isPortalOpen} closeModal={() => setIsPortalOpen(false)}>
              <div className="p-2">
                {message}
              </div>
            </Portal>
          </PortalContainer>
        )}

      </form>
    </div>
  );
}

export default FeedbackForm;