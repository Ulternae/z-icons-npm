import React from 'react';

export const LanRefrigeratorSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88 0C39.4 0 0 39.4 0 88v72h272v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v40h64V88c0-48.6-39.4-88-88-88zm296 208h-64v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V208H0v240c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64z"})
);

export default LanRefrigeratorSolid;
