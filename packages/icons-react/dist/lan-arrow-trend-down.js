import React from 'react';

export const LanArrowTrendDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 400c0 8.8 7.2 16 16 16h176c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16s-16 7.2-16 16v137.4L331.3 148.7c-6.2-6.2-16.4-6.2-22.6 0L192 265.4 27.3 100.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0L320 182.6 521.4 384H384c-8.8 0-16 7.2-16 16"})
);

export default LanArrowTrendDown;
