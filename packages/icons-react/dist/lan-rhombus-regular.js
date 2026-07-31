import React from 'react';

export const LanRhombusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.014 -16 448.065 536',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M7 236c-9.5 11.8-9.3 28.7.3 40.4l192 232c6.1 7.3 15.1 11.6 24.7 11.6s18.6-4.3 24.7-11.6l192-232c9.7-11.7 9.8-28.6.3-40.4L249-4c-6.1-7.6-15.3-12-25-12s-18.9 4.4-25 12zM224 41.6l171.4 214.2L224 462.9 52.6 255.8zm179.7 204.2"})
);

export default LanRhombusRegular;
