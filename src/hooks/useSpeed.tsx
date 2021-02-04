import { useEffect, useState, useRef } from "react";

export function useSpeed(): number {
  const [speed, setSpeed] = useState<number>(0);

  const geo: any = useRef();

  useEffect(() => {
    geo.current = navigator.geolocation.watchPosition(success, error);

    function success(pos: GeolocationPosition) {
      if (pos.coords.speed) {
        setSpeed(pos.coords.speed);
      } else {
        setSpeed(0);
      }
    }

    function error(err: GeolocationPositionError) {
      alert("ERROR(" + err.code + "): " + err.message);
    }

    // geo.current = navigator.geolocation.watchPosition((pos:GeolocationPosition) => {
    //   if (pos.coords.speed) {
    //     setSpeed(pos.coords.speed);
    //   } else {
    //     setSpeed(0);
    //   }
    // });
    return () => navigator.geolocation.clearWatch(geo.current);
  }, []);
  return speed;
}
