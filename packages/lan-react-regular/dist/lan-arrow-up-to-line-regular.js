import React from 'react';

export function LanArrowUpToLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24S373.3 0 360 0zm185 135c-9.4-9.4-24.6-9.4-33.9 0L39 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l95-95V488c0 13.3 10.7 24 24 24s24-10.7 24-24V209.9l95 95c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
  );
}

export default LanArrowUpToLineRegular;
