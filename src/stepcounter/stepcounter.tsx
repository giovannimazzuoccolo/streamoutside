import React from "react";
import { useStep } from "./../hooks/useStep";

interface IProps {
  visible: boolean;
  draggable: boolean;
}

const Stepcounter: React.FC<IProps> = ({ visible, draggable }) => {
  const step = useStep();

  if (!visible) {
    return null;
  }

  return <div draggable={draggable}>You made {step} steps!</div>;
};

export default Stepcounter;
