import React from 'react';

export const LanArchway = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h16v384H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h152c8.8 0 16-7.2 16-16V360c0-39.8 32.2-72 72-72s72 32.2 72 72v104c0 8.8 7.2 16 16 16h152c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm432 32v64H64V64zm0 96v288h-88v-88c0-57.4-46.6-104-104-104s-104 46.6-104 104v88H64V160z"})
);

export default LanArchway;
