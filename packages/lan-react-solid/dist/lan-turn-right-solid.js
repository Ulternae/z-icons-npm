import React from 'react';

export function LanTurnRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9S320 115.1 320 128v64H160C71.6 192 0 263.6 0 352v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7 14.3-32 32-32h160v64c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"})
  );
}

export default LanTurnRightSolid;
