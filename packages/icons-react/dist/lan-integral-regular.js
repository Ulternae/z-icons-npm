import React from 'react';

export const LanIntegralRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 48c-22.1 0-40 17.9-40 40v336c0 48.6-39.4 88-88 88S8 472.6 8 424v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v16c0 22.1 17.9 40 40 40s40-17.9 40-40V88c0-48.6 39.4-88 88-88s88 39.4 88 88v16c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-22.1-17.9-40-40-40"})
);

export default LanIntegralRegular;
