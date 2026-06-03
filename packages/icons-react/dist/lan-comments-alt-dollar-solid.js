import React from 'react';

export const LanCommentsAltDollarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 40c0-39.8-32.2-72-72-72H72C32.2-32 0 .2 0 40v192c0 39.8 32.2 72 72 72h24v64c0 8.8 7.2 16 16 16h1.8c4 0 7.8-1.5 10.8-4.2L208 304h104c39.8 0 72-32.2 72-72zM192 383.4v8.6c0 39.8 32.2 72 72 72h104l83.4 75.8c2.9 2.7 6.8 4.2 10.8 4.2h1.8c8.8 0 16-7.2 16-16v-64h24c39.8 0 72-32.2 72-72V200c0-39.8-32.2-72-72-72h-72v104c0 66.3-53.7 120-120 120h-85.4zM196 24c11 0 20 9 20 20v4h8c11 0 20 9 20 20s-9 20-20 20h-47.5c-6.9 0-12.5 5.6-12.5 12.5 0 6.1 4.4 11.3 10.4 12.3l41.7 7c25.3 4.2 43.9 26.1 43.9 51.8 0 26.1-19 47.7-44 51.8v4.7c0 11-9 20-20 20s-20-9-20-20v-4h-24c-11 0-20-9-20-20s9-20 20-20h55.5c6.9 0 12.5-5.6 12.5-12.5 0-6.1-4.4-11.3-10.4-12.3l-41.7-7c-25.3-4.2-43.9-26.1-43.9-51.8 0-28.8 23.2-52.2 52-52.5v-4c0-11 9-20 20-20"})
);

export default LanCommentsAltDollarSolid;
