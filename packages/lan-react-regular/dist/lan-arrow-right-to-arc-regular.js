import React from 'react';

export function LanArrowRightToArcRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 256c0 114.9-93.1 208-208 208-13.3 0-24 10.7-24 24s10.7 24 24 24c141.4 0 256-114.6 256-256S397.4 0 256 0c-13.3 0-24 10.7-24 24s10.7 24 24 24c114.9 0 208 93.1 208 208M241 377l104-104c9.4-9.4 9.4-24.6 0-33.9L241 135c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l63 63H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h246.1l-63 63c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z"})
  );
}

export default LanArrowRightToArcRegular;
