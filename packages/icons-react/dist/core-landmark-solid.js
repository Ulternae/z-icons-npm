import React from 'react';

export const CoreLandmarkSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -36.9 512.1 548.9',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m256-36.9 15.9 9.1 220 125.7c12.5 7.1 20.2 20.4 20.2 34.7V152c0 19.4-13.7 35.5-32 39.2V384h-64V192h-64v192h-64V192h-64v192h-64V192h-64v192h-64V191.2C13.8 187.5 0 171.4 0 152v-19.4c0-14.3 7.7-27.6 20.2-34.7l220-125.7 15.9-9.1zM0 448h512v64H0z"})
);

export default CoreLandmarkSolid;
