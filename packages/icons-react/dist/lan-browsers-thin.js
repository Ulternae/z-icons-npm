import React from 'react';

export const LanBrowsersThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 48v96H112V96c0-26.5 21.5-48 48-48zm16 0h272c26.5 0 48 21.5 48 48v48H240zm320 112v160c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48V160zM160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM8 160c-4.4 0-8 3.6-8 8v248c0 35.3 28.7 64 64 64h408c4.4 0 8-3.6 8-8s-3.6-8-8-8H64c-26.5 0-48-21.5-48-48V168c0-4.4-3.6-8-8-8"})
);

export default LanBrowsersThin;
