import React from 'react';

export const LanTugrikSignSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h128v111.3L58.2 232.8C45.3 236 37.5 249 40.7 261.9s16.3 20.6 29.1 17.4l90.2-22.5v46.5L58.2 328.8C45.3 332 37.5 345 40.7 357.9s16.3 20.6 29.1 17.4l90.2-22.5v95.3c0 17.7 14.3 32 32 32s32-14.3 32-32V336.8l101.8-25.5c12.9-3.2 20.7-16.2 17.5-29.1s-16.2-20.7-29.1-17.5L224 287.2v-46.5l101.8-25.5c12.9-3.2 20.7-16.2 17.5-29.1s-16.2-20.7-29.1-17.5L224 191.3V96h128c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
);

export default LanTugrikSignSolid;
