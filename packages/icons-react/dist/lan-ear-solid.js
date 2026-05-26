import React from 'react';

export const LanEarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 348c-12 8.6-22.3 19.7-27.8 33.4l-20.1 50.2c-19.4 48.5-66.4 80.4-118.8 80.4H128C57.3 512 0 454.7 0 384V192C0 86 86 0 192 0s192 86 192 192c0 64.2-31.5 121.1-80 156M112 192c0-44.2 35.8-80 80-80s80 35.8 80 80v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-70.7-57.3-128-128-128S64 121.3 64 192v40c0 13.3 10.7 24 24 24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h16c39.8 0 72-32.2 72-72 0-37.1-28-67.6-64-71.6z"})
);

export default LanEarSolid;
