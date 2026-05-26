import React from 'react';

export const LanSquareChfSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm40 112c22.1 0 40 17.9 40 40v8c0 13.3-10.7 24-24 24-2.8 0-5.5-.5-8-1.4v82.7c2.5-.9 5.2-1.4 8-1.4 13.3 0 24 10.7 24 24v8c0 22.1-17.9 40-40 40s-40-17.9-40-40v-144c0-22.1 17.9-40 40-40zm104 24v64h16v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v176c0 13.3-10.7 24-24 24s-24-10.7-24-24v-64h-16v64c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3 10.7-24 24-24s24 10.7 24 24m104-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v40h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v64c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3 10.7-24 24-24"})
);

export default LanSquareChfSolid;
