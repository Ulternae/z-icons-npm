import React from 'react';

export const LanSkiBootRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M344.4 19.5c2.5-13 15-21.6 28-19.2s21.6 15 19.2 28l-45 240.2 93.3 60.3c25.1 16.2 40.2 44 40.2 73.9v61.2h8c13.2 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.2 0-24-10.7-24-24v-28.3c0-9.2.8-18.4 2.5-27.5L72.4 51.7l1.1-4.1C77 38.3 85.9 32 96 32h246.1l2.3-12.4zM243.7 80c-36.2 143.1-113.8 201.6-169 224.9l-25 136c-1.1 6.2-1.7 12.5-1.7 18.8v4.3h384v-61.2c0-13.6-6.9-26.2-18.3-33.6L312.9 304H248c-13.2 0-24-10.7-24-24s10.8-24 24-24h52.1l9-48H280c-13.3 0-24-10.7-24-24s10.8-24 24-24h38.1l15-80h-89.3zm-158 164.9c37.8-24.7 82.4-72.3 108.4-164.9H116z"})
);

export default LanSkiBootRegular;
