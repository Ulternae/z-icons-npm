import React from 'react';

export function CoreWheelchair({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 448 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M160 16a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-32 211.2v66.3c-37.3 13.2-64 48.7-64 90.5 0 53 43 96 96 96s96-43 96-96h64c0 88.4-71.6 160-160 160S0 472.4 0 384c0-77.4 55-142 128-156.8m143 .8-47-58.8V288h160c16.1 0 29.8 12 31.8 28 12.7 101.4 19.3 154.6 20 159.8l-63.5 7.9Q370.5 469 355.8 352H224c-35.3 0-64-28.7-64-64V152c0-30.9 25.1-56 56-56h4.5c17 0 33.1 7.7 43.7 21l47.2 59H368v64h-72c-9.7 0-18.9-4.4-25-12"})
  );
}

export default CoreWheelchair;
