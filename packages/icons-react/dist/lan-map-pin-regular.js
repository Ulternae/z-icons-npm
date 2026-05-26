import React from 'react';

export const LanMapPinRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 144a96 96 0 1 1 192 0 96 96 0 1 1-192 0m120 142c68.1-11.4 120-70.7 120-142C304 64.5 239.5 0 160 0S16 64.5 16 144c0 71.4 51.9 130.6 120 142v202c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
);

export default LanMapPinRegular;
