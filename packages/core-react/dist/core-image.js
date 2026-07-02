import React from 'react';

export function CoreImage({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M448 96v216.4L339.8 204.2c-10.9-10.9-28.7-10.9-39.6 0L88.4 416H64V96zm0 295.6V416H167.6L320 263.6zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm120 176a40 40 0 1 0-80 0 40 40 0 1 0 80 0"})
  );
}

export default CoreImage;
