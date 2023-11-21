import {createPortal} from 'react-dom';

const portalRoot = document.getElementById('portal');

const PortalContainer = ({ children }) => {
  return createPortal(children, portalRoot);
};

export default PortalContainer;