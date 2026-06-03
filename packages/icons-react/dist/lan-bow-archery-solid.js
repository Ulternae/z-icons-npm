import React from 'react';

export const LanBowArcherySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 528.075',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M65.7 117c100.4-93.9 257.9-92 355.8 6s99.9 255.4 5.9 355.8c7.9 12.4 6.5 29-4.3 39.9-12.5 12.5-32.8 12.5-45.2 0l-352-352c-12.5-12.5-12.5-32.8 0-45.2 10.8-10.8 27.4-12.3 39.8-4.4zm310.6 51.2c-72.8-72.8-189.4-74.9-264.8-6.5L382.7 433c68.5-75.4 66.3-192-6.4-264.7z"})
);

export default LanBowArcherySolid;
