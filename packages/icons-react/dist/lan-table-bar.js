import React from 'react';

export const LanTableBar = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 32c44.2 0 80 35.8 80 80v48c0 17.7-14.3 32-32 32H240v256h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h96V192H32c-17.7 0-32-14.3-32-32v-48c0-41.4 31.5-75.5 71.8-79.6L80 32zM80 64c-26.5 0-48 21.5-48 48v48h384v-48c0-26.5-21.5-48-48-48z"})
);

export default LanTableBar;
