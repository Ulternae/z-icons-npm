import React from 'react';

export const LanFileAward = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 32h128v96c0 35.3 28.7 64 64 64h96v256c0 17.7-14.3 32-32 32H256v32h192c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0H192c-35.3 0-64 28.7-64 64v80c10.9 0 21.6 1 32 2.9V64c0-17.7 14.3-32 32-32m160 13.3L466.7 160H384c-17.7 0-32-14.3-32-32zM32 320a96 96 0 1 1 192 0 96 96 0 1 1-192 0m144 118.7V505l-40.1-22.9c-4.9-2.8-11-2.8-15.9 0L80 505v-66.3c14.8 6 31 9.3 48 9.3s33.2-3.3 48-9.3m32-18.8c29.3-23.5 48-59.5 48-99.9 0-70.7-57.3-128-128-128S0 249.3 0 320c0 40.4 18.7 76.5 48 99.9v101.8C48 534 58 544 70.3 544c3.9 0 7.7-1 11.1-2.9l46.6-26.6 46.6 26.6c3.4 1.9 7.2 2.9 11.1 2.9 12.3 0 22.3-10 22.3-22.3zM128 344a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-80a56 56 0 1 0 0 112 56 56 0 1 0 0-112"})
);

export default LanFileAward;
