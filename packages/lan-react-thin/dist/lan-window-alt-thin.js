import React from 'react';

export function LanWindowAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-26.5 0-48 21.5-48 48v80h480v-80c0-26.5-21.5-48-48-48zM16 224v160c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V224zM448 64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zm-16 80a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-80 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0"})
  );
}

export default LanWindowAltThin;
