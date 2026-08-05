import React from 'react';

export function LanNairaSignThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M78.5 35.4c-2-2.9-5.6-4.1-9-3S64 36.5 64 40v216H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v200c0 4.4 3.6 8 8 8s8-3.6 8-8V272h145.5l144 204.6c2 2.9 5.6 4.1 9 3s5.6-4.1 5.6-7.6V272h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v216H233.9L78.7 35.4zM245 272h123v174.7zm-30.8-16H80V65.3z"})
  );
}

export default LanNairaSignThin;
