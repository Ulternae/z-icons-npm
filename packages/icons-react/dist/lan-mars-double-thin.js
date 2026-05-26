import React from 'react';

export const LanMarsDoubleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M481.1 417.1c57.3-57.3 62.1-147.3 14.2-210 2.6-6.1 4.1-12.7 4.5-19.7 61.2 69.1 58.7 174.8-7.5 241-46.2 46.2-111.6 61.3-170.5 45.5 4.9-4.2 9.5-8.6 14-13.1 50.8 10.3 105.7-4.2 145.1-43.6zM624 59.3l-124 124v-22.6L612.7 48H500v-8c0-2.7-.2-5.4-.5-8H632c2.1 0 4.2.8 5.7 2.3s2.3 3.6 2.3 5.7v144c0 4.4-3.6 8-8 8s-8-3.6-8-8zM296 48c-4.4 0-8-3.6-8-8s3.6-8 8-8h144c4.4 0 8 3.6 8 8v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V59.3l-126 126c28.6 31.3 46 72.9 46 118.7 0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c45.7 0 87.4 17.4 118.7 46l126-126zM176 464a160 160 0 1 0 0-320 160 160 0 1 0 0 320"})
);

export default LanMarsDoubleThin;
