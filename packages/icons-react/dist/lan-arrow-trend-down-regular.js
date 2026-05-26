import React from 'react';

export const LanArrowTrendDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 392c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v118.1l-191-191c-9.4-9.4-24.6-9.4-33.9 0L192 254.1 41 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6-.1 34l168 168c9.4 9.4 24.6 9.4 33.9 0L320 193.9 494.1 368H376c-13.3 0-24 10.7-24 24"})
);

export default LanArrowTrendDownRegular;
