import React from 'react';

export const LanBraSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M143.5 60.7c2.6-13-5.8-25.6-18.8-28.2s-25.6 5.8-28.2 18.8L60.3 232.1C33 258.3 16 295.2 16 336c0 79.5 64.5 144 144 144 49.9 0 93.9-25.4 119.8-64h16.5c25.8 38.6 69.8 64 119.8 64 79.5 0 144-64.5 144-144 0-40.8-17-77.7-44.3-103.9L479.5 51.3c-2.6-13-15.2-21.4-28.2-18.8s-21.4 15.2-18.8 28.2l37.3 186.6-14.7 5.9C403 274 357.4 308.1 322.7 352h-69.5c-34.6-43.9-80.2-78-132.3-98.8l-14.7-5.9z"})
);

export default LanBraSolid;
