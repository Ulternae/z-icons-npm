import React from 'react';

export function LanClipboardExclamationRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M232 0c25 0 47 12.7 59.9 32H320c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h28.1C105 12.7 127 0 152 0zM64 80c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16h-16.4c-4 36-34.5 64-71.6 64h-80c-37.1 0-67.6-28-71.6-64zm128 280c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m0-176c18.3 0 32.8 15.7 31.3 34l-7.3 88c-1 12.4-11.4 22-23.9 22s-22.9-9.6-23.9-22l-7.3-88c-1.5-18.3 12.9-34 31.2-34zM152 48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanClipboardExclamationRegular;
