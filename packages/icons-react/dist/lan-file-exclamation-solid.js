import React from 'react';

export const LanFileExclamationSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M213.5 0c17 0 33.2 6.8 45.2 18.8l106.6 106.4c12 12 18.7 28.3 18.7 45.2V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM192 400c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32m0-176c-18.3 0-32.8 15.7-31.2 34l7.3 88c1 12.4 11.4 22 23.9 22s22.9-9.6 23.9-22l7.3-88c1.5-18.3-12.9-34-31.3-34zm16-72c0 13.3 10.7 24 24 24h93.5L208 58.5z"})
);

export default LanFileExclamationSolid;
