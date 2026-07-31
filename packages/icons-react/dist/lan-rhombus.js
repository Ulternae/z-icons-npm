import React from 'react';

export const LanRhombus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.014 -16 448.027 536',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 16 32 256l192 232 192-232zm0-32c9.7 0 18.9 4.4 25 12l192 240c9.5 11.8 9.3 28.7-.3 40.4l-192 232c-6.1 7.3-15.1 11.6-24.7 11.6s-18.6-4.3-24.7-11.6l-192-232c-9.6-11.7-9.8-28.5-.3-40.4L199-4c6.1-7.6 15.3-12 25-12"})
);

export default LanRhombus;
