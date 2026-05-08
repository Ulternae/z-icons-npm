import React from 'react';

export const MinaWebcam = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12 17.4A7.2 7.2 0 1 0 12 3a7.2 7.2 0 0 0 0 14.4m0 0V21m-4.5 0h9m-1.8-10.8a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0"})
);

export default MinaWebcam;
