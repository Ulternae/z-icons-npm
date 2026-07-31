import React from 'react';

export function CoreEnvelope({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 96v28.4l192 137.1 192-137.1V96zm0 97.3V416h384V193.3L272.3 318.8 256 330.4l-16.3-11.6zM0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
  );
}

export default CoreEnvelope;
