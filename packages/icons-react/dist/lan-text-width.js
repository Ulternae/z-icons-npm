import React from 'react';

export const LanTextWidth = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 543.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M40 0C17.9 0 0 17.9 0 40v72c0 8.8 7.2 16 16 16s16-7.2 16-16V40c0-4.4 3.6-8 8-8h168v224h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V32h168c4.4 0 8 3.6 8 8v72c0 8.8 7.2 16 16 16s16-7.2 16-16V40c0-22.1-17.9-40-40-40zm67.3 379.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-80 80c-6.2 6.2-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 464h338.7l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l52.7 52.7H54.6z"})
);

export default LanTextWidth;
