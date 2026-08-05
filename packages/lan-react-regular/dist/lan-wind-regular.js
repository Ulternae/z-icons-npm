import React from 'react';

export function LanWindRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 24c0 13.3 10.7 24 24 24h44c24.3 0 44 19.7 44 44s-19.7 44-44 44H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h332c50.8 0 92-41.2 92-92S406.8 0 356 0h-44c-13.3 0-24 10.7-24 24m64 368c0 13.3 10.7 24 24 24h44c50.8 0 92-41.2 92-92s-41.2-92-92-92H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h396c24.3 0 44 19.7 44 44s-19.7 44-44 44h-44c-13.3 0-24 10.7-24 24M120 512h44c50.8 0 92-41.2 92-92s-41.2-92-92-92H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h140c24.3 0 44 19.7 44 44s-19.7 44-44 44h-44c-13.3 0-24 10.7-24 24s10.7 24 24 24"})
  );
}

export default LanWindRegular;
