import {FC} from 'react';

interface PortalProps {
  isOpen: boolean;
  closeModal: () => void;
  type?: 'error' | 'success' | 'warning' | null;
}

const Portal: FC<PortalProps> = ({isOpen, closeModal, type, children}) => {
  if (!isOpen) {
    return null;
  }

  const typeToBg = {
    warning: "#fcefb1",
    error: "#fac5c5",
    success: "#b1f6b1",
  };

  const bg = typeToBg[type] || "";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div style={{backgroundColor: bg}} className={`bg-white p-6 rounded shadow-lg relative`}>
        <button className={`text-xl absolute top-1 right-2 text-gray-700 hover:text-black`}
                onClick={closeModal}>
          x
        </button>
          {children}
      </div>
    </div>
  );
};

export default Portal;