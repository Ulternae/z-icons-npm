import React from 'react';

export const LanCabinetFilingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 248H16V64c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48zM0 256v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zm368 192c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V264h352zM112 120c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 4.4 3.6 8 8 8s8-3.6 8-8zm8 232c-13.3 0-24 10.7-24 24v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-13.3-10.7-24-24-24z"})
);

export default LanCabinetFilingThin;
