import React from 'react';

export const CoreChartSimpleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v432H160zM0 272c0-26.5 21.5-48 48-48h80v288H48c-26.5 0-48-21.5-48-48zm464-144c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H352V128z"})
);

export default CoreChartSimpleSolid;
