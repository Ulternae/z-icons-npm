import React from 'react';

export function LanSimCard({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V125.3c0-8.5-3.4-16.6-9.4-22.6l-61.2-61.3c-6-6-14.1-9.4-22.6-9.4zm240-13.3L365.3 80c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h194.7c17 0 33.3 6.7 45.3 18.7M288 416v-64H176v64zm-144 0v-64H96v64zM96 256v64h112v-64zm192 64v-64h-48v64zm32-64v160c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32"})
  );
}

export default LanSimCard;
