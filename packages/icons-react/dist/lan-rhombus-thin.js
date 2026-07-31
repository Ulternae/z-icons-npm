import React from 'react';

export const LanRhombusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.014 -16 448.027 536',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M236.5 6c-3-3.8-7.6-6-12.5-6s-9.5 2.2-12.5 6l-192 240c-4.7 5.9-4.7 14.4.2 20.2l192 232c3 3.7 7.6 5.8 12.3 5.8s9.3-2.1 12.3-5.8l192-232c4.8-5.8 4.9-14.3.2-20.2zM224-16c9.7 0 18.9 4.4 25 12l192 240c9.5 11.8 9.3 28.7-.3 40.4l-192 232c-6.1 7.3-15.1 11.6-24.7 11.6s-18.6-4.3-24.7-11.6l-192-232c-9.6-11.7-9.8-28.5-.3-40.4L199-4c6.1-7.6 15.3-12 25-12"})
);

export default LanRhombusThin;
