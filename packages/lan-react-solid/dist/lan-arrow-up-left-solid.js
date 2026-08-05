import React from 'react';

export function LanArrowUpLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 64C14.3 64 0 78.3 0 96v224c0 17.7 14.3 32 32 32s32-14.3 32-32V173.3l265.4 265.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 128H256c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
  );
}

export default LanArrowUpLeftSolid;
