import React from 'react';

export function LanMale({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M168 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0M108.8 191.1c1-1.7 2.1-3.4 3.2-5V528c0 8.8 7.2 16 16 16s16-7.2 16-16V368h96v160c0 8.8 7.2 16 16 16s16-7.2 16-16V186.1c1.1 1.6 2.2 3.3 3.2 5l63.1 105.1c4.5 7.6 14.4 10 22 5.5s10-14.4 5.5-21.9l-63.1-105.2C279.3 135.8 237.3 112 192 112s-87.3 23.8-110.6 62.6L18.3 279.8c-4.5 7.6-2.1 17.4 5.5 21.9s17.4 2.1 22-5.5l63.1-105.1zM240 336h-96V156.7c14.4-8.2 30.9-12.7 48-12.7s33.6 4.5 48 12.7z"})
  );
}

export default LanMale;
