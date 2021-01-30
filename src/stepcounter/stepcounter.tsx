import React from "react";

interface IProps {
  visible: boolean;
  draggable: boolean;
}

const Stepcounter: React.FC<IProps> = ({ visible, draggable }) => {
  if (!visible) {
    return null;
  }

  return <div draggable={draggable}>Hello world!</div>;
};

export default Stepcounter;
