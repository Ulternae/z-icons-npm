import React from 'react';

export function CoreAirplaySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v256c0 35.3 28.7 64 64 64h28.1l1.9-1.9 161.9-161.9 161.9 161.9 1.9 1.9h28.1c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm192 288L128 448v64h256v-64z"})
  );
}

export default CoreAirplaySolid;
