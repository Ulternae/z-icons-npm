import React from 'react';

export const LanCompressWideRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v88H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24zM24 288c-13.3 0-24 10.7-24 24s10.7 24 24 24h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V312c0-13.3-10.7-24-24-24zM400 88c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-88zm-24 200c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24v-88h88c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanCompressWideRegular;
