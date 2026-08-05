import React from 'react';

export function LanRows3Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 416V96l-.3-6.5C444.4 57.2 417.1 32 384 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320l6.5-.3c30.1-3.1 54.1-27 57.1-57.1l.3-6.5zm-16-80v80c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-80zm0-16H16V192h416zM16 176V96c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v80z"})
  );
}

export default LanRows3Thin;
