import React from 'react';

export const LanArrowTrendUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 112c0-8.8 7.2-16 16-16h176c8.8 0 16 7.2 16 16v176c0 8.8-7.2 16-16 16s-16-7.2-16-16V150.6L331.3 363.3c-6.2 6.2-16.4 6.2-22.6 0L192 246.6 27.3 411.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l176-176c6.2-6.2 16.4-6.2 22.6 0L320 329.4 521.4 128H384c-8.8 0-16-7.2-16-16"})
);

export default LanArrowTrendUp;
