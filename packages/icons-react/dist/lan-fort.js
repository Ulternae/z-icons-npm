import React from 'react';

export const LanFort = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 32c8.8 0 16 7.2 16 16v48h80V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h80V48c0-8.8 7.2-16 16-16s16 7.2 16 16v112h64V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h80V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h80V48c0-8.8 7.2-16 16-16s16 7.2 16 16v160c0 20.9-13.4 38.7-32 45.3V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V253.3C13.4 246.7 0 228.9 0 208V48c0-8.8 7.2-16 16-16m224 448h96v-64c0-26.5-21.5-48-48-48s-48 21.5-48 48zm128 0h112c17.7 0 32-14.3 32-32V256H368c-26.5 0-48-21.5-48-48v-16h-64v16c0 26.5-21.5 48-48 48H64v192c0 17.7 14.3 32 32 32h112v-64c0-44.2 35.8-80 80-80s80 35.8 80 80zm176-352H352v80c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16zM32 208c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-80H32z"})
);

export default LanFort;
