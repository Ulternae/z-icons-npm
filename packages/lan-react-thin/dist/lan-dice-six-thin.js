import React from 'react';

export function LanDiceSixThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm48 128a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m16 96a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192-208a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m16 96a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0"})
  );
}

export default LanDiceSixThin;
