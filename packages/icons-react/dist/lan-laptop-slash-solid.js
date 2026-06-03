import React from 'react';

export const LanLaptopSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 640 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M73-24.9c-9.4-9.4-24.6-9.4-33.9 0S29.7-.3 39 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-24.3-24.3c36-6.4 63.3-37.8 63.3-75.6 0-10.6-8.6-19.2-19.2-19.2h-139l-288-288h318.2v240h64v-240c0-35.3-28.7-64-64-64L129.8 32zM128 166l-64-64v234h64zm314 314-96-96H19.2C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480z"})
);

export default LanLaptopSlashSolid;
