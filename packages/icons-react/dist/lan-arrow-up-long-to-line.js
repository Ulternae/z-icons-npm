import React from 'react';

export const LanArrowUpLongToLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -64 320 640',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16-64h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2-32 0-39.2 0-48s7.2-16 16-16M148.7 68.7c6.2-6.2 16.4-6.2 22.6 0l144 144c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L176 118.6V560c0 8.8-7.2 16-16 16s-16-7.2-16-16V118.6L27.3 235.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"})
);

export default LanArrowUpLongToLine;
