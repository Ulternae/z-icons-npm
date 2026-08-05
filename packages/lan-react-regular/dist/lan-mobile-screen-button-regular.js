import React from 'react';

export function LanMobileScreenButtonRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 448c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V336H64zm0-160h256V64c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zM16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm176 368c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32"})
  );
}

export default LanMobileScreenButtonRegular;
