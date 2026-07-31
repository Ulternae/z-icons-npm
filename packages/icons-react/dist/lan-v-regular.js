import React from 'react';

export const LanVRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M14.7 33.9c12.2-5.1 26.3.6 31.4 12.8L192 394 337.9 46.7c5.1-12.2 19.2-18 31.4-12.8s18 19.2 12.8 31.4l-168 400c-3.7 8.9-12.5 14.7-22.1 14.7s-18.4-5.8-22.1-14.7l-168-400c-5.2-12.2.6-26.3 12.8-31.4"})
);

export default LanVRegular;
