import React from 'react';

export const LanVideoHandheldRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M168 80c-22.1 0-40 17.9-40 40v40h224c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V224c0-29.8 20.4-54.9 48-62v-42c0-48.6 39.4-88 88-88h160c13.3 0 24 10.7 24 24s-10.7 24-24 24zM96 208c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16zm56 48h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24m385.6-75.2c4.2-3.1 9.2-4.8 14.4-4.8 13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24-5.2 0-10.2-1.7-14.4-4.8L464 404v-60l64 48V248l-64 48v-60z"})
);

export default LanVideoHandheldRegular;
