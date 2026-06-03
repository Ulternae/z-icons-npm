import React from 'react';

export const LanMapMarkerSmileSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.1 0 384.1 515',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 188.6C0 84.4 86 0 192 0s192 84.4 192 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0C120.1 450.9-.1 307.9-.1 188.6zm128 3.4a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-159.4 84.9c-6.1-9.2-18.5-11.7-27.7-5.5s-11.7 18.5-5.5 27.7c11.5 17.3 45.5 48.9 96.6 48.9s85.1-31.6 96.6-48.9c6.1-9.2 3.6-21.6-5.5-27.7s-21.6-3.6-27.7 5.5c-6.2 9.4-29.1 31.1-63.4 31.1s-57.1-21.7-63.4-31.1"})
);

export default LanMapMarkerSmileSolid;
