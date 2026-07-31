import React from 'react';

export const CoreLandmarkRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -36.9 512 548.9',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96.5 128h319L256 36.9z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M271.9-27.8 256-36.9l-15.9 9.1-220 125.7C7.7 105 0 118.3 0 132.6V152c0 19.3 13.7 35.5 32 39.2V384h64V192h64v192h64V192h64v192h64V192h64v192h64V191.2c18.3-3.7 32-19.9 32-39.2v-19.4c0-14.4-7.7-27.6-20.2-34.7zM256 36.9 415.5 128h-319zM32 448H0v64h512v-64z"})
);

export default CoreLandmarkRegularDuo;
