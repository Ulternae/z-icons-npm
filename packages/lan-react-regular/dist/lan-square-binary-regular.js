import React from 'react';

export function LanSquareBinaryRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 76c-24.3 0-44 19.7-44 44v40c0 24.3 19.7 44 44 44h32c24.3 0 44-19.7 44-44v-40c0-24.3-19.7-44-44-44zm-4 44c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v40c0 2.2-1.8 4-4 4h-32c-2.2 0-4-1.8-4-4zm140-44c-11 0-20 9-20 20 0 9.7 6.9 17.7 16 19.6V216c0 11 9 20 20 20s20-9 20-20v-88c0-11-9-20-20-20zM132 296c0 9.7 6.9 17.7 16 19.6V384c0 11 9 20 20 20s20-9 20-20v-88c0-11-9-20-20-20h-16c-11 0-20 9-20 20m96 24v40c0 24.3 19.7 44 44 44h32c24.3 0 44-19.7 44-44v-40c0-24.3-19.7-44-44-44h-32c-24.3 0-44 19.7-44 44m44-4h32c2.2 0 4 1.8 4 4v40c0 2.2-1.8 4-4 4h-32c-2.2 0-4-1.8-4-4v-40c0-2.2 1.8-4 4-4"})
  );
}

export default LanSquareBinaryRegular;
