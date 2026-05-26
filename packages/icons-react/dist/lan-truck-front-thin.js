import React from 'react';

export const LanTruckFrontThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 48c35.3 0 64 28.7 64 64v176c-11.5-15.4-28.5-26.4-48-30.4V192c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v65.6c-19.5 4-36.5 15-48 30.4V112c0-35.3 28.7-64 64-64zm80 288V112c0-44.2-35.8-80-80-80H80C35.8 32 0 67.8 0 112v256c0 26.2 12.6 49.4 32 64v48c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-32h224v32c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-48c19.4-14.6 32-37.8 32-64zm-48 105.3V480c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-32h16c11.4 0 22.2-2.4 32-6.7M48 480v-38.7c9.8 4.3 20.6 6.7 32 6.7h16v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16m384-144v32c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64h288c35.3 0 64 28.7 64 64m-64-80H80v-64c0-26.5 21.5-48 48-48h192c26.5 0 48 21.5 48 48zM80 352a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m224-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanTruckFrontThin;
