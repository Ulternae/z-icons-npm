import React from 'react';

export const LanV = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M9.8 33.3c8.1-3.4 17.5.4 21 8.5L192 422.9 353.3 41.8c3.4-8.1 12.8-11.9 21-8.5s11.9 12.8 8.5 21l-176 416c-2.5 5.9-8.3 9.8-14.7 9.8s-12.2-3.8-14.7-9.8L1.3 54.2c-3.4-8.1.4-17.5 8.5-21z"})
);

export default LanV;
