import React from 'react';

export function LanSquare4Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm104 112c13.3 0 24 10.7 24 24v88h48v-88c0-13.3 10.7-24 24-24s24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-56c-22.1 0-40-17.9-40-40v-96c0-13.3 10.7-24 24-24"})
  );
}

export default LanSquare4Solid;
