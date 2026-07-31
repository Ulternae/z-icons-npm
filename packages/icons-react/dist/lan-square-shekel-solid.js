import React from 'react';

export const LanSquareShekelSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm56 104h88c39.8 0 72 32.2 72 72v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56c0-13.3-10.7-24-24-24h-64v168c0 13.3-10.7 24-24 24s-24-10.7-24-24V160c0-13.3 10.7-24 24-24m232 24v144c0 39.8-32.2 72-72 72h-88c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17V248c0-13.3 10.7-24 24-24s24 10.7 24 24v80h64c13.3 0 24-10.7 24-24V160c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanSquareShekelSolid;
