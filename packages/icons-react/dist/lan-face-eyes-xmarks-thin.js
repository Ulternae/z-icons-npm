import React from 'react';

export const LanFaceEyesXmarksThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m251.8 48h8.4c46.3 0 83.8 37.5 83.8 83.8 0 6.7-5.5 12.2-12.2 12.2H180.2c-6.7 0-12.2-5.5-12.2-12.2 0-46.3 37.5-83.8 83.8-83.8m8.4 16h-8.4c-36.2 0-65.7 28.3-67.7 64h143.8c-2-35.7-31.5-64-67.7-64M106.3 138.3c3.1-3.1 8.2-3.1 11.3 0l42.3 42.3 42.3-42.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-42.3 42.3 42.3 42.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-42.3-42.3-42.3 42.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l42.3-42.3-42.3-42.3c-3.1-3.1-3.1-8.2 0-11.3m192 0c3.1-3.1 8.2-3.1 11.3 0l42.3 42.3 42.3-42.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-42.3 42.3 42.3 42.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-42.3-42.3-42.3 42.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l42.3-42.3-42.3-42.3c-3.1-3.1-3.1-8.2 0-11.3"})
);

export default LanFaceEyesXmarksThin;
