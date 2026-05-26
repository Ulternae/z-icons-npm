import React from 'react';

export const LanHexagonVerticalNftSlantedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M221.2 511.1c22.2 12.7 49.4 12.7 71.5 0l168.1-96.2c22.4-12.8 36.2-36.7 36.2-62.5V160.8c0-25.8-13.8-49.7-36.2-62.5l-168-96.2c-22.2-12.7-49.4-12.7-71.5 0L53.2 98.3C30.8 111.1 17 134.9 17 160.8v191.6c0 25.8 13.8 49.7 36.2 62.5l168.1 96.2zm47.7-41.7c-7.4 4.2-16.5 4.2-23.8 0L77 373.2c-7.4-4.2-12-12.2-12-20.8V160.8c0-8.6 4.6-16.6 12.1-20.8l168-96.3c7.4-4.2 16.5-4.2 23.8 0L437 139.9c7.5 4.3 12.1 12.2 12.1 20.8v191.6c0 8.6-4.6 16.6-12.1 20.8zM129.9 183c-4.1-8.3-13.5-12.7-22.5-10.5S92 182.7 92 192v128c0 11 9 20 20 20s20-9 20-20v-43.3l26.1 52.2c4.1 8.3 13.5 12.7 22.5 10.5S196 329.3 196 320V192c0-11-9-20-20-20s-20 9-20 20v43.3l-26.1-52.2zm90.1 9v128c0 11 9 20 20 20s20-9 20-20v-44h28c11 0 20-9 20-20s-9-20-20-20h-28v-24h28c11 0 20-9 20-20s-9-20-20-20h-48c-11 0-20 9-20 20m116-20c-11 0-20 9-20 20s9 20 20 20h12v108c0 11 9 20 20 20s20-9 20-20V212h12c11 0 20-9 20-20s-9-20-20-20z"})
);

export default LanHexagonVerticalNftSlantedRegular;
