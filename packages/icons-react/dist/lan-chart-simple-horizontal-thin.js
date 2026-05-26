import React from 'react';

export const LanChartSimpleHorizontalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 48v32c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V48c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32M336 0H48C21.5 0 0 21.5 0 48v32c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48m96 272c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32zm16-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM240 464c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32zm16-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z"})
);

export default LanChartSimpleHorizontalThin;
