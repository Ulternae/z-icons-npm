import React from 'react';

export const LanCrossRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64v192c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V272H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h64zm112 0h-64v88c0 13.3-10.7 24-24 24H48v64h88c13.3 0 24 10.7 24 24v216h64V248c0-13.3 10.7-24 24-24h88v-64h-88c-13.3 0-24-10.7-24-24z"})
);

export default LanCrossRegular;
