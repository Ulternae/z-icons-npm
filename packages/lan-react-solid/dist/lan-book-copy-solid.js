import React from 'react';

export function LanBookCopySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 384h224c17.7 0 32-14.3 32-32s-14.3-32-32-32v-66.7c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H320c-53 0-96 43-96 96v192c0 53 43 96 96 96m-32-96c0-17.7 14.3-32 32-32h160v64H320c-17.7 0-32-14.3-32-32M96 128c-53 0-96 43-96 96v192c0 53 43 96 96 96h224c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h116.7c-22.8-25.5-36.7-59.1-36.7-96V128z"})
  );
}

export default LanBookCopySolid;
