import React from 'react';

export function LanArrowLeftFromArcRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 256c0-114.9-93.1-208-208-208-13.3 0-24-10.7-24-24s10.7-24 24-24c141.4 0 256 114.6 256 256S397.4 512 256 512c-13.3 0-24-10.7-24-24s10.7-24 24-24c114.9 0 208-93.1 208-208M119.7 134.4c9.7-9 24.9-8.5 33.9 1.3s8.5 24.9-1.3 33.9L85.1 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H85.1l67.2 62.4c9.7 9 10.3 24.2 1.3 33.9s-24.2 10.3-33.9 1.3l-112-104C2.8 269 0 262.7 0 256s2.8-13 7.7-17.6z"})
  );
}

export default LanArrowLeftFromArcRegular;
