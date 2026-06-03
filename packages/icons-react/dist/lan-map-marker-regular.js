import React from 'react';

export const LanMapMarkerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.1 0 384.1 515',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 48c-80.3 0-144 63.7-144 140.6 0 45.6 23.8 101.5 58.9 157.1 28.3 44.8 61 84.8 85.1 112.1 24.1-27.3 56.7-67.2 85.1-112.1 35.1-55.5 58.9-111.5 58.9-157.1C336 111.8 272.3 48 192 48M0 188.6C0 84.4 86 0 192 0s192 84.4 192 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0C120.1 450.9-.1 307.9-.1 188.6z"})
);

export default LanMapMarkerRegular;
