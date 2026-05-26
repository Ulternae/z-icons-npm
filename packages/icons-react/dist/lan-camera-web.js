import React from 'react';

export const LanCameraWeb = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 224a192 192 0 1 1 384 0 192 192 0 1 1-384 0m208 223.4c116.2-8.2 208-105.1 208-223.4C448 100.3 347.7 0 224 0S0 100.3 0 224c0 118.3 91.8 215.2 208 223.4V480h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80zM128 224a96 96 0 1 1 192 0 96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0"})
);

export default LanCameraWeb;
