import React from 'react';

export function LanCommentMiddleTopAltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m176 64 67.2-89.6c3-4 7.8-6.4 12.8-6.4s9.8 2.4 12.8 6.4L336 64h80c53 0 96 43 96 96v224c0 53-43 96-96 96H96c-53 0-96-43-96-96V160c0-53 43-96 96-96z"})
  );
}

export default LanCommentMiddleTopAltSolid;
