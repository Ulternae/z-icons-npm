import React from 'react';

export const LanFaceShaking = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -53.652 576 619.304',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M213.7-22.2c8.5-2.3 13.6-11.1 11.3-19.6s-11-13.6-19.5-11.3C126.4-31.9 55.3 19.5 11.1 96c-4.4 7.7-1.7 17.4 5.9 21.9s17.4 1.8 21.9-5.9C78.6 43.1 142.5-3.1 213.7-22.2M565.4 416c4.4-7.7 1.8-17.4-5.9-21.9s-17.4-1.8-21.9 5.9c-39.8 68.9-103.7 115.1-174.9 134.2-8.5 2.3-13.6 11.1-11.3 19.6s11.1 13.6 19.6 11.3c79.1-21.2 150.1-72.6 194.3-149.1zM383.7 89.7a191.9 191.9 0 1 1-191.4 332.6A191.9 191.9 0 1 1 383.7 89.7M176.3 450A223.9 223.9 0 1 0 399.7 62a223.9 223.9 0 1 0-223.4 388m87.5-263.6a24 24 0 1 0-41.6-24 24 24 0 1 0 41.6 24m105.8 88.8a24 24 0 1 0 24-41.6 24 24 0 1 0-24 41.6m-146.3 93.4a42 42 0 1 1 42-72.7 42 42 0 1 1-42 72.7m-39.6-71.4a70 70 0 1 0 121.2 70 70 70 0 1 0-121.2-70"})
);

export default LanFaceShaking;
