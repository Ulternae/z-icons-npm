import React from 'react';

export function LanUpFromBracketSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M241 7c-9.4-9.4-24.6-9.4-33.9 0L63 151c-6.9 6.9-8.9 17.2-5.2 26.2S70.3 192 80 192h80v112c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V192h80c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2zM64 352c0-17.7-14.3-32-32-32S0 334.3 0 352v64c0 53 43 96 96 96h256c53 0 96-43 96-96v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"})
  );
}

export default LanUpFromBracketSolid;
