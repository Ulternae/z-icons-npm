import React from 'react';

export function LanLevelUpAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 54.6 102.6 144H136c13.3 0 24 10.7 24 24v200c0 17.7-14.3 32-32 32H48v64h64c61.9 0 112-50.1 112-112V168c0-13.3 10.7-24 24-24h33.4zM169.4 9.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S333 192.1 320 192.1h-48v160c0 88.4-71.6 160-160 160H32c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h80v-160H64c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128z"})
  );
}

export default LanLevelUpAltRegular;
