import React from 'react';

export const LanShirtTankTopRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 24c0-13.3-10.7-24-24-24S64 10.7 64 24c0 127.9-26.8 181-41.5 200.5C12.9 237.2 0 257.2 0 280.7V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V280.7c0-23.5-12.9-43.5-22.5-56.3-14.7-19.5-41.5-72.6-41.5-200.5 0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 44.2-35.8 80-80 80s-80-35.8-80-80v-48zM99.3 160.2c23.3 24.5 56.2 39.8 92.7 39.8s69.4-15.3 92.7-39.8c10.3 46.7 25.2 75.5 38.5 93.1 8.6 11.4 12.8 20.5 12.8 27.3V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V280.7c0-6.8 4.2-15.9 12.8-27.3 13.3-17.6 28.2-46.5 38.5-93.1z"})
);

export default LanShirtTankTopRegular;
