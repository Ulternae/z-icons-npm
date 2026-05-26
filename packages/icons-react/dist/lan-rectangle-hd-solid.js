import React from 'react';

export const LanRectangleHdSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 32c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-48h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v48h-48v-48c0-13.3-10.7-24-24-24m176 0c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24h48c39.8 0 72-32.2 72-72v-48c0-39.8-32.2-72-72-72zm48 144h-24v-96h24c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24"})
);

export default LanRectangleHdSolid;
