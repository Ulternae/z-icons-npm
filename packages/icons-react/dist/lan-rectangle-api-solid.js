import React from 'react';

export const LanRectangleApiSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zm-320 96c-35.3 0-64 28.7-64 64v104c0 13.3 10.7 24 24 24s24-10.7 24-24v-24h32v24c0 13.3 10.7 24 24 24s24-10.7 24-24V224c0-35.3-28.7-64-64-64m120 0c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h16c35.3 0 64-28.7 64-64s-28.7-64-64-64zm160 0c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24m-280 48c8.8 0 16 7.2 16 16v32h-32v-32c0-8.8 7.2-16 16-16m160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v-32z"})
);

export default LanRectangleApiSolid;
