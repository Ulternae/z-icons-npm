import React from 'react';

export const LanChartKanban = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 416c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16zm48-16c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48zM240 288h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16m32 32h-32c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48M48 384h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16m32 32H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48"})
);

export default LanChartKanban;
