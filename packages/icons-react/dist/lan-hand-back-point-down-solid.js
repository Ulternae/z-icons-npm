import React from 'react';

export const LanHandBackPointDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M136 512c-22.1 0-40-17.9-40-40V192c0-8.8-7.2-16-16-16s-16 7.2-16 16v55.7c-2-1.4-3.9-3-5.8-4.5l-19.2-16C24.4 215 16 197 16 178v-38c0-38 16.9-74 46.1-98.3l5.4-4.5C96.3 13.1 132.5 0 169.9 0H288c70.7 0 128 57.3 128 128v96c0 26.5-21.5 48-48 48-12.4 0-23.6-4.7-32.1-12.3C334 284.5 313.3 304 288 304c-12.4 0-23.6-4.7-32.1-12.3C254 316.5 233.3 336 208 336c-12.3 0-23.5-4.6-32-12.2V472c0 22.1-17.9 40-40 40"})
);

export default LanHandBackPointDownSolid;
