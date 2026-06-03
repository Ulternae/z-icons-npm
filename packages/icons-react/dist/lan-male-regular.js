import React from 'react';

export const LanMaleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-32 352h64V167.1c-9.9-4.6-20.8-7.1-32-7.1s-22.1 2.5-32 7.1zm0 48v152c0 13.3-10.7 24-24 24s-24-10.7-24-24V217.6L51.5 302c-7.7 10.8-22.7 13.3-33.5 5.5S4.8 284.8 12.5 274l79.2-110.5C114.8 131.2 152.2 112 192 112s77.2 19.2 100.3 51.5L371.5 274c7.7 10.8 5.2 25.8-5.5 33.5s-25.8 5.2-33.5-5.5L272 217.6V520c0 13.3-10.7 24-24 24s-24-10.7-24-24V368z"})
);

export default LanMaleRegular;
