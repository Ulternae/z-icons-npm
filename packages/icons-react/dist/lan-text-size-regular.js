import React from 'react';

export const LanTextSizeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 136V80h88v352H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48V80h88v56c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v64c0 13.3 10.7 24 24 24s24-10.7 24-24m256 192v-56h88v160h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48V272h88v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-64c0-22.1-17.9-40-40-40H296c-22.1 0-40 17.9-40 40v64c0 13.3 10.7 24 24 24s24-10.7 24-24"})
);

export default LanTextSizeRegular;
