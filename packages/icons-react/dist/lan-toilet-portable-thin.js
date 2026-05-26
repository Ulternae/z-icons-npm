import React from 'react';

export const LanToiletPortableThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 16c-17.7 0-32 14.3-32 32v64h288V48c0-17.7-14.3-32-32-32zM16 464h288V336h-8c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h8v-80H16zm288-144v-96h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24zm16 16v168c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24H16v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48z"})
);

export default LanToiletPortableThin;
