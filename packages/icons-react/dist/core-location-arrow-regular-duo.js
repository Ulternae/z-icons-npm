import React from 'react';

export const CoreLocationArrowRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M78.8 224 423.4 88.6 288 433.2V224z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M468.3 2.2c11.8-4.6 25.3-1.8 34.3 7.2s11.8 22.5 7.2 34.3L325.8 512H224V288H0V186.2zM78.8 224H288v209.2L423.4 88.6z"})
);

export default CoreLocationArrowRegular-duo;
