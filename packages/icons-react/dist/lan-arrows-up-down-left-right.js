import React from 'react';

export const LanArrowsUpDownLeftRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M267.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-72 72c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L240 54.6V240H54.6l44.7-44.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-72 72c-6.2 6.2-6.2 16.4 0 22.6l72 72c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272H240v185.4l-44.7-44.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l72 72c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L272 457.4V272h185.4l-44.7 44.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6l-72-72c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l44.7 44.7H272V54.6l44.7 44.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z"})
);

export default LanArrowsUpDownLeftRight;
