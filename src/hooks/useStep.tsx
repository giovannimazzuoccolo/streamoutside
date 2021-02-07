import { useState, useEffect } from "react";

export const useStep = (): number => {
  const [steps, setSteps] = useState<number>(0);
  const [motion, setMotion] = useState<number>(0);

  function motionHandler(evt:DeviceMotionEvent) {
	  if(evt.accelerationIncludingGravity?.y) {
     		setMotion(evt.accelerationIncludingGravity.y);
	  } else {
	  	return false;
	  }
  }

  useEffect(() => {
    if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
      window.addEventListener("devicemotion", motionHandler, false);
      window.addEventListener("deviceorientation", orientationHandler, false);
    }

  function orientationHandler(evt:DeviceOrientationEvent) {
	let flag = false;

	if(evt.beta !== null) {
	if((motion -10 * Math.sin(evt.beta*Math.PI/180)) > 1) {
		flag = true;
	}

	if((motion-10*Math.sin(evt.beta*Math.PI/180)) <-1) {
		if(flag) {
			setSteps(steps => steps+1);
		}
	}
	}
  }

    return () => {
      window.removeEventListener("devicemotion", motionHandler);
      window.removeEventListener("deviceorientation", orientationHandler);
    };
  }, [motion]);

  return steps;
};
