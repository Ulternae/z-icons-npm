import React from 'react';

export function LanSneakerSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 157.7V352h640v-19.6c0-62.6-45.2-116-107-126.3l-83.4-13.9c-.2.2-.4.5-.7.7l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l40.2-40.1-37.3-22.9c-.3.3-.6.7-1 1l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l40.9-40.9-80.2-49.4c-5-3.1-10.8-4.7-16.8-4.7L224 64c-17.7 0-32 14.3-32 32v72c0 30.9-25.1 56-56 56h-5.4c-21.2 0-40.6-12-50.1-31l-24.3-48.6c-5-10.1-15.3-16.4-26.5-16.4C13.3 128 0 141.3 0 157.7M640 400H0c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48"})
  );
}

export default LanSneakerSolid;
