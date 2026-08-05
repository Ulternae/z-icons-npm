import React from 'react';

export function LanCrateEmptySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 224c-26.5 0-48 21.5-48 48v80h512v-80c0-26.5-21.5-48-48-48zm464 160H0v80c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48zM64 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32M48 448a16 16 0 1 1 32 0 16 16 0 1 1-32 0m400-176a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-16 176a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
  );
}

export default LanCrateEmptySolid;
