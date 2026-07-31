import React from 'react';

export const LanWatchRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M155-32h138c24.5 0 45 18.4 47.7 42.7l10.1 90.6C395.5 138 424 193.7 424 256s-28.5 118-73.2 154.7l-10.1 90.6C338 525.6 317.5 544 293 544H155c-24.5 0-45-18.4-47.7-42.7l-10.1-90.6C52.5 374 24 318.3 24 256s28.5-118 73.2-154.7l10.1-90.6C110-13.6 130.5-32 155-32m69 184c13.3 0 24 10.7 24 24v70.1l41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-4.5-4.5-7-10.6-7-17v-80c0-13.3 10.7-24 24-24zm152 104a152 152 0 1 0-304 0 152 152 0 1 0 304 0"})
);

export default LanWatchRegular;
