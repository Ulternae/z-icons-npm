import React from 'react';

export const LanChopsticksSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 0c-15.3 0-29 7.2-37.7 18.3L3.4 486.1c-5.5 6.9-4.3 17 2.7 22.5s17 4.2 22.5-2.7L405.7 77.7C412.1 69.5 416 59.2 416 48c0-26.5-21.5-48-48-48M131.9 506.4c5.8 6.7 15.9 7.5 22.6 1.7l468.7-359.7c10.3-8.8 16.8-21.9 16.8-36.4 0-26.5-21.5-48-48-48-11.9 0-22.8 4.4-31.2 11.6L133.6 483.9c-6.7 5.8-7.5 15.8-1.7 22.6z"})
);

export default LanChopsticksSolid;
