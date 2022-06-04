import { ReactNode } from 'react';
import reactDom from 'react-dom';

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const el = document.getElementById('root') as HTMLElement;
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
