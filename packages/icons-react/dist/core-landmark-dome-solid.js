import React from 'react';

export const CoreLandmarkDomeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512.1 544',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 216.3C0 79.2 111.2-32 248.3-32h15.5c137.1 0 248.3 111.2 248.3 248.3 0 19.3-13.8 35.4-32 39V384h-64V256h-64v128h-64V256h-64v128h-64V256h-64v128h-64V255.2c-18.2-3.6-32-19.7-32-39zM0 448h512v64H0z"})
);

export default CoreLandmarkDomeSolid;
