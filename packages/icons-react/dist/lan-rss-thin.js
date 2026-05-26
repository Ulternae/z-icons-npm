import React from 'react';

export const LanRssThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8c234.2 0 424 189.8 424 424 0 4.4 3.6 8 8 8s8-3.6 8-8C448 229 251 32 8 32m0 144c-4.4 0-8 3.6-8 8s3.6 8 8 8c154.6 0 280 125.4 280 280 0 4.4 3.6 8 8 8s8-3.6 8-8c0-163.5-132.5-296-296-296m8 240a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"})
);

export default LanRssThin;
