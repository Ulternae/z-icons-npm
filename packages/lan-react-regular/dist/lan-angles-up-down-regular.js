import React from 'react';

export function LanAnglesUpDownRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M209.5 7c-9.4-9.4-24.6-9.4-33.9 0L23.5 159c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135 135 135c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm152 346c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135-135-135c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l152 152c9.4 9.4 24.6 9.4 33.9 0l152-152z"})
  );
}

export default LanAnglesUpDownRegular;
