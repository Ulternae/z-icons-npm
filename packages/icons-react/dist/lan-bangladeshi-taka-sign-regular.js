import React from 'react';

export const LanBangladeshiTakaSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M26.4 32.1C13.2 30.8 1.4 40.4.1 53.6s8.3 25 21.5 26.3L44 82.1c20.4 2 36 19.3 36 39.8V176H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v168c0 48.6 39.4 88 88 88h32c101.6 0 184-82.4 184-184v-32c0-48.6-39.4-88-88-88h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h16c22.1 0 40 17.9 40 40v32c0 75.1-60.9 136-136 136h-32c-22.1 0-40-17.9-40-40V224h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40v-54.1c0-45.2-34.3-83.1-79.2-87.6z"})
);

export default LanBangladeshiTakaSignRegular;
