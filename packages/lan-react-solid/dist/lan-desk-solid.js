import React from 'react';

export function LanDeskSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M544 64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32v256c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16H320v16c0 17.7-14.3 32-32 32s-32-14.3-32-32V160H96v256c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM344 224c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
  );
}

export default LanDeskSolid;
