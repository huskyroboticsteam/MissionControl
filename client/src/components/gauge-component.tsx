import React, { useEffect, useRef } from "react";
import SvgGauge from "svg-gauge";
import "./gauge-component.css";
const defaultOptions = {
  animDuration: 1,
  showValue: true,
  initialValue: 0,
  max: 50 ,
  dialStartAngle: 180,
  dialEndAngle: 0,
  color: function(value) {
    if(value < 15) {
      return "#5ee432";
    }else if(value < 25) {
      return "#fffa50";
    }else if(value < 38) {
      return "#f7aa38";
    }else {
      return "#ef4655";
    }
  } 
  // Put any other defaults you want. e.g. dialStartAngle, dialEndAngle, radius, etc.
};

const Gauge = props => {
  const gaugeEl = useRef(null);
  const gaugeRef = useRef(null);
  useEffect(() => {
    if (!gaugeRef.current) {
      const options = { ...defaultOptions, ...props };
      gaugeRef.current = SvgGauge(gaugeEl.current, options);
      gaugeRef.current.setValue(options.initialValue);
    }
    gaugeRef.current.setValueAnimated(props.value, 1);
  }, [props]);

  return <div ref={gaugeEl} className="gauge-container two"><div className="gauge-container two value-text">km/hr</div></div>;
};

export default Gauge;