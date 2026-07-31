import React from 'react';

export function CoreClipboard({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 448 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M264 64c0-22.1-17.9-40-40-40s-40 17.9-40 40v40h80zM133.5 32c13.1-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H384c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM320 96v64H128V96H64v352h320V96z"})
  );
}

export default CoreClipboard;
