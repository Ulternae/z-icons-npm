import React from 'react';

export const LanChild = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M73.9 240.2c1.9-3.1 3.9-6 6.1-8.9V496c0 8.8 7.2 16 16 16s16-7.2 16-16V384h96v112c0 8.8 7.2 16 16 16s16-7.2 16-16V231.3c2.2 2.8 4.2 5.8 6.1 8.9l44.3 72.2c4.6 7.5 14.5 9.9 22 5.3s9.9-14.5 5.3-22l-44.3-72.2C249.2 184 206.3 160 160 160s-89.2 24-113.4 63.5L2.4 295.6c-4.6 7.5-2.3 17.4 5.3 22s17.4 2.3 22-5.3L74 240.1zM208 352h-96V204.1c14.5-7.8 31-12.1 48-12.1s33.5 4.3 48 12.1z"})
);

export default LanChild;
