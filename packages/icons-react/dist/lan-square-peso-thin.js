import React from 'react';

export const LanSquarePesoThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 40c0-4.4 3.6-8 8-8h72c41.8 0 77.4 26.7 90.5 64H344c4.4 0 8 3.6 8 8s-3.6 8-8 8h-25.3c.9 5.2 1.3 10.5 1.3 16s-.5 10.8-1.3 16H344c4.4 0 8 3.6 8 8s-3.6 8-8 8h-29.5c-13.2 37.3-48.7 64-90.5 64h-64v48c0 4.4-3.6 8-8 8s-8-3.6-8-8V256h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-32h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h24zm80 8h-64v48h137.3c-12.3-28.3-40.5-48-73.3-48m-64 96h142.4c1-5.2 1.6-10.5 1.6-16s-.6-10.8-1.6-16H160zm0 16v48h64c32.8 0 61-19.7 73.3-48z"})
);

export default LanSquarePesoThin;
