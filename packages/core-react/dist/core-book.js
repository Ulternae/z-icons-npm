import React from 'react';

export function CoreBook({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M0 416V96C0 43 43 0 96 0h224v384H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h288V64h64v448H96c-53 0-96-43-96-96m128-96h128V64H96c-17.7 0-32 14.3-32 32v229.5c.4-.1.8-.3 1.2-.4 9.7-3.3 20-5 30.8-5h32z"})
  );
}

export default CoreBook;
