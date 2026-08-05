import React from 'react';

export function LanCircleNaira({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.9-383.2c-6.6 2.1-11.1 8.2-11.1 15.2v112h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h67.2l63.8 89.3c4 5.7 11.3 8.1 17.9 5.9S352 375 352 368v-80h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v112h-44.3l-86.6-121.3c-4-5.7-11.3-8.1-17.9-5.9zM320 318.1 298.5 288H320zM192 193.9l44.3 62.1H192z"})
  );
}

export default LanCircleNaira;
