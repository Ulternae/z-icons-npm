import React from 'react';

export const LanCarWrenchSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80.3 128c32.8 0 61-19.7 73.3-48H359c12.3 28.3 40.5 48 73.3 48 35.8 0 66.1-23.5 76.3-56h-68.3c-13.2 0-23.9-10.7-24-23.9v-.2c.1-13.2 10.8-23.9 24-23.9h68.3c-10.2-32.5-40.5-56-76.3-56-32.8 0-61 19.7-73.3 48H153.7c-12.4-28.3-40.6-48-73.4-48C44.5-32 14.2-8.5 4 24h68.3c13.2 0 23.9 10.6 24 23.8v.4C96.2 61.4 85.5 72 72.3 72H4c10.2 32.5 40.5 56 76.3 56m97.3 80h157.5c6.7 0 12.6 4.1 15 10.4l26.1 69.6H136.6l26.1-69.6c2.3-6.2 8.3-10.4 15-10.4zM66.4 292.8l-1.3 3.4C45.6 307.1 32.3 328 32.3 352v128c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32v-32h288v32c0 17.7 14.3 32 32 32h16c17.7 0 32-14.3 32-32V352c0-24-13.2-44.9-32.8-55.9l-1.3-3.4-36.3-96.9c-11.7-31.2-41.6-51.9-74.9-51.9H177.5c-33.3 0-63.2 20.7-74.9 51.9zm62 43.2a32 32 0 1 1 0 64 32 32 0 1 1 0-64m224 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanCarWrenchSolid;
