import React from 'react';

export const LanGingerbreadManSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 576.04',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M308.7 192c26.6-23.5 43.3-57.8 43.3-96 0-70.7-57.3-128-128-128S96 25.3 96 96c0 38.2 16.8 72.5 43.3 96H64c-35.3 0-64 28.7-64 64s28.7 64 64 64h19c20.1 0 31.3 23.2 18.8 38.9l-54.2 68.3c-24.7 31.1-19.5 76.4 11.6 101.2s76.4 19.5 101.2-11.6l44.8-56.5c9.6-12.1 28-12.1 37.6 0l44.8 56.5c24.7 31.1 70 36.4 101.2 11.6s36.4-70 11.6-101.2l-54.2-68.3c-12.5-15.7-1.3-38.9 18.8-38.9h19c35.3 0 64-28.7 64-64s-28.7-64-64-64zM152 80a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-72 200a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanGingerbreadManSolid;
