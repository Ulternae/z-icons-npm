import React from 'react';

export function LanUserViewfinderSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v72c0 13.3 10.7 24 24 24s24-10.7 24-24V64c0-8.8 7.2-16 16-16h72c13.3 0 24-10.7 24-24S149.3 0 136 0zm312 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h72c8.8 0 16 7.2 16 16v72c0 13.3 10.7 24 24 24s24-10.7 24-24V64c0-35.3-28.7-64-64-64zM48 376c0-13.3-10.7-24-24-24S0 362.7 0 376v72c0 35.3 28.7 64 64 64h72c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16zm464 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v72c0 8.8-7.2 16-16 16h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h72c35.3 0 64-28.7 64-64zM328 168a72 72 0 1 0-144 0 72 72 0 1 0 144 0M208 288c-44.2 0-80 35.8-80 80 0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32 0-44.2-35.8-80-80-80z"})
  );
}

export default LanUserViewfinderSolid;
