import React from 'react';

export function LanDistributeSpacingVertical({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 464c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16M144 320c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16zm224 32c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48zM496 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H16C7.2 32 0 39.2 0 48s7.2 16 16 16z"})
  );
}

export default LanDistributeSpacingVertical;
