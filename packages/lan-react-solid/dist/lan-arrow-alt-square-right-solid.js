import React from 'react';

export function LanArrowAltSquareRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-92.7 171.3-104 104c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8v-56h-96c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h96v-56c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l104 104c6.2 6.2 6.2 16.4 0 22.6"})
  );
}

export default LanArrowAltSquareRightSolid;
