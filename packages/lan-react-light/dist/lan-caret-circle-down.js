import React from 'react';

export function LanCaretCircleDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448m0-480a256 256 0 1 0 0 512 256 256 0 1 0 0-512m0 352c9.6 0 18.7-4 25.2-11l95.5-102.8c4.7-5.1 7.3-11.8 7.3-18.7 0-15.2-12.3-27.5-27.5-27.5h-201c-15.2 0-27.5 12.3-27.5 27.5 0 6.9 2.6 13.6 7.3 18.7L230.8 341c6.5 7 15.6 11 25.2 11m1.7-32.7c-.4.5-1.1.7-1.7.7s-1.3-.3-1.7-.7L165.9 224h180.3l-88.4 95.3z"})
  );
}

export default LanCaretCircleDown;
