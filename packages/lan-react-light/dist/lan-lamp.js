import React from 'react';

export function LanLamp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M5.4 273.8c-5.9-8.9-7-20.2-2.9-30.1l80-192C87.4 39.8 99.1 32 112 32h224c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1S426.7 288 416 288H304v28.1c29.3 23.5 48 59.5 48 99.9 0 38.2-16.8 72.5-43.3 96H139.4c-26.6-23.5-43.3-57.8-43.3-96 0-40.4 18.7-76.5 48-99.9V288h-112c-10.7 0-20.7-5.3-26.6-14.2zM144 256h272L336 64H112L32 256zm32 32v43.4l-12 9.6c-22 17.6-36 44.7-36 75 0 24.6 9.2 47 24.4 64h143.1c15.2-17 24.4-39.4 24.4-64 0-30.3-14-57.3-36-75l-12-9.6V288h-96z"})
  );
}

export default LanLamp;
