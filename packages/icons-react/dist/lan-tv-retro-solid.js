import React from 'react';

export const LanTvRetroSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M137.4 9.4c12.5-12.5 32.8-12.5 45.3 0L256 82.7l73.4-73.3c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L333.3 96H448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h114.7l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3zM112 160c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V208c0-26.5-21.5-48-48-48zm360 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanTvRetroSolid;
