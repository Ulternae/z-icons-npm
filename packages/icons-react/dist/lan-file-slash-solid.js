import React from 'react';

export const LanFileSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-89-89V170.6c0-17-6.7-33.3-18.7-45.3L354.7 18.7C342.7 6.7 326.5 0 309.5 0H160c-25.5 0-47.4 14.9-57.8 36.4zm55 190.7V448c0 35.3 28.7 64 64 64h256c7.8 0 15.3-1.4 22.2-4zM421.5 176H328c-13.3 0-24-10.7-24-24V58.5z"})
);

export default LanFileSlashSolid;
