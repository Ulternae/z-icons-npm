import React from 'react';

export const LanTentDoublePeakRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M442.2 40.4c-6.8-10.8-23.6-11.6-31.6-1.6-22.6 28.4-66.3 71.8-122.6 71.8S188 67.2 165.4 38.7c-7.9-10-24.8-9.1-31.6 1.6-32.5 51.6-75.6 85.3-107.9 105.2C10.4 155 0 171.4 0 189.6V448c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V189.7c0-18.2-10.4-34.6-25.9-44.1-32.3-19.9-75.4-53.6-107.9-105.2m82.8 146c1.4.9 2.3 1.9 2.7 2.6.2.3.3.6.3.6v34.3H48v-34.3q0-.15.3-.6c.4-.7 1.3-1.7 2.8-2.6 29.8-18.3 68.2-47.4 101.8-89.9 29.6 29.2 75.9 62.1 135.2 62.1s105.5-32.9 135.2-62.1c33.6 42.6 72 71.6 101.8 89.9zM48 272h208v192H64c-8.8 0-16-7.2-16-16zm256 0h224v176c0 8.8-7.2 16-16 16H407.4z"})
);

export default LanTentDoublePeakRegular;
