import React from 'react';

export const LanPersonDressSimpleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M63.2 223.9C72 195.4 98.3 176 128 176s56.1 19.4 64.8 47.9l38 123.4c3.2 10.3-4.5 20.7-15.3 20.7H184c-4.4 0-8 3.6-8 8v88c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-88c0-4.4-3.6-8-8-8H40.5c-10.8 0-18.5-10.4-15.3-20.7zM128 160c-36.8 0-69.3 24-80.1 59.2l-38 123.4C3.6 363.2 19 384 40.5 384H64v80c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-80h23.5c21.5 0 36.9-20.8 30.6-41.4l-38-123.4C197.3 184 164.8 160 128 160"})
);

export default LanPersonDressSimpleThin;
