import React from 'react';

export const LanSigmaThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M.7 36.7C2 33.8 4.8 32 8 32h344c17.7 0 32 14.3 32 32v64c0 4.4-3.6 8-8 8s-8-3.6-8-8V64c0-8.8-7.2-16-16-16H25.8L206 250.7c2.7 3 2.7 7.6 0 10.6L25.8 464H352c8.8 0 16-7.2 16-16v-64c0-4.4 3.6-8 8-8s8 3.6 8 8v64c0 17.7-14.3 32-32 32H8c-3.2 0-6-1.8-7.3-4.7s-.8-6.3 1.3-8.6L189.3 256 2 45.3C-.1 43-.6 39.6.7 36.7"})
);

export default LanSigmaThin;
