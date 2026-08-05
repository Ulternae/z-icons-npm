import React from 'react';

export function LanDownFromBracketSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 160c0 17.7-14.3 32-32 32S0 177.7 0 160V96C0 43 43 0 96 0h256c53 0 96 43 96 96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zm177 345c-9.4 9.4-24.6 9.4-33.9 0L63 361c-6.9-6.9-8.9-17.2-5.2-26.2S70.3 320 80 320h80V208c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v112h80c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2z"})
  );
}

export default LanDownFromBracketSolid;
