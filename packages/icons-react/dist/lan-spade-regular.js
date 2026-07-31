import React from 'react';

export const LanSpadeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M254.6 48.8c.5-.5 1.2-.8 1.9-.8s1.4.3 1.9.8l182.7 182.6c31.2 31.2 31.2 81.9 0 113.1s-81.9 31.2-113.1 0L273.5 290c-9.4-9.4-24.6-9.4-33.9 0l-54.5 54.5c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1zM256.5 0c-13.5 0-26.4 5.3-35.9 14.9L38 197.5c-50 50-50 131 0 181s131 50 181 0l13.5-13.5v99h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-99l13.5 13.5c50 50 131 50 181 0s50-131 0-181L292.4 14.9C282.9 5.3 270 0 256.5 0"})
);

export default LanSpadeRegular;
