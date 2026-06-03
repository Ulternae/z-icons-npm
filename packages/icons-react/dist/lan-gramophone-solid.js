import React from 'react';

export const LanGramophoneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.997 384 543.997',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M149.7-18.3c-4.3-9.1-13.9-14.5-23.9-13.6s-18.4 8-21 17.8l-72 272c-2.6 9.7 1.2 20 9.4 25.8s19.2 5.8 27.4.1c93.7-64.5 182.7-70.6 233.4-67 11.9.8 21.9 9.5 24.4 23.4.4 2.3.6 4.7.6 7 0 22.1-18.8 40.8-40.8 40.8H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h103.2c49.1 0 88.8-39.8 88.8-88.8 0-40.8-27.2-74.2-59.7-90.6-45.7-23.1-118.4-73.5-166.6-174.9M64 384c-17.7 0-32 14.3-32 32v32c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-32c0-17.7-14.3-32-32-32z"})
);

export default LanGramophoneSolid;
