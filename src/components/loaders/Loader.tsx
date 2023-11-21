import {FC} from 'react';

const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center h-32">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-700"></div>
    </div>
  );
};

export default Loader;
