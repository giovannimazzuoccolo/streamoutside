import { useState, useEffect } from "react";

const useStep = (): number => {
  const [steps, setSteps] = useState<number>(0);
  const [trigger, setTrigger] = useState<Boolean>(false);

  function motionHandler() {
    console.log("noop");
  }

  function orientationHandler() {
    console.log("nooop");
  }

  useEffect(() => {
    if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
      window.addEventListener("devicemotion", motionHandler, false);
      window.addEventListener("deviceorientation", orientationHandler, false);
    }

    return () => {
      window.removeEventListener("devicemotion", motionHandler);
      window.removeEventListener("deviceorientation", orientationHandler);
    };
  }, []);

  return steps;
};
