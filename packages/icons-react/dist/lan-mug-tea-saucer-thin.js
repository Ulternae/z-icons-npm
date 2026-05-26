import React from 'react';

export const LanMugTeaSaucerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M200 48v37l46.1 52.7c6.4 7.3 9.9 16.7 9.9 26.3v52c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-52c0-9.7 3.5-19 9.9-26.3L184 85V48H96c-8.8 0-16 7.2-16 16v224c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V48zm248 0v176h24c48.6 0 88-39.4 88-88s-39.4-88-88-88zm0 192v48c0 53-43 96-96 96H160c-53 0-96-43-96-96V64c0-17.7 14.3-32 32-32h376c57.4 0 104 46.6 104 104s-46.6 104-104 104zM32 472c0-4.4 3.6-8 8-8h440c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8m117.9-323.8c-3.8 4.4-5.9 10-5.9 15.8v52c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-52c0-5.8-2.1-11.4-5.9-15.8L192 100.1z"})
);

export default LanMugTeaSaucerThin;
