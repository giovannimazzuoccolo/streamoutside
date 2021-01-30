import { FunctionComponent } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useSpeed } from "../hooks/useSpeed";

interface IProps {
  visible: boolean;
  draggable: boolean;
}

const Speedometer: FunctionComponent<IProps> = ({ visible, draggable }) => {
  const speed: number = useSpeed();

  if (!visible) {
    return null;
  }

  return (
    <div draggable={draggable} data-testId={"Speedometer"}>
      <ReactSpeedometer value={speed} maxValue={50} segments={5} />
    </div>
  );
};

export default Speedometer;
