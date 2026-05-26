import React from 'react';

export const LanShop24Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M21.5 181.1 78.3 67.4c10.9-21.7 33-35.4 57.3-35.4h304.9c24.2 0 46.4 13.7 57.2 35.4l56.8 113.7c3.6 7.2 5.5 15.1 5.5 23.2 0 27.3-21.2 49.7-48 51.6V304h-64v-48h-96v48h-64v-48H128v112c0 8.8 7.2 16 16 16h160v96H112c-26.5 0-48-21.5-48-48V255.9c-26.8-1.9-48-24.3-48-51.6 0-8 1.9-16 5.5-23.2M348 400c0-28.7 23.3-52 52-52s52 23.3 52 52v1c0 14.6-5.4 28.7-15 39.6L405.4 476H432c11 0 20 9 20 20s-9 20-20 20h-58.2c-14.2 0-25.8-11.5-25.8-25.8 0-6.3 2.3-12.4 6.5-17.1l52.6-59.1c3.2-3.6 4.9-8.2 4.9-13v-1c0-6.6-5.4-12-12-12s-12 5.4-12 12c0 11-9 20-20 20s-20-9-20-20m128 32v-64c0-11 9-20 20-20s20 9 20 20v44h24v-44c0-11 9-20 20-20s20 9 20 20v128c0 11-9 20-20 20s-20-9-20-20v-44h-44c-5.3 0-10.4-2.1-14.1-5.9s-5.9-8.8-5.9-14.1"})
);

export default LanShop24Solid;
