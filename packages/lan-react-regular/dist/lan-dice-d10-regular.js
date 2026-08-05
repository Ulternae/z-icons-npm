import React from 'react';

export function LanDiceD10Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -5.875 512 532.05',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M219.8 11c19.2-22.5 54-22.5 73.1 0l205.9 242.2c16.6 19.5 14.9 48.5-3.7 66.1L289.2 513.1l-3.6 3.1c-17.2 13.3-41.4 13.3-58.6 0l-3.5-3.2L17.6 319.3C.2 302.8-2.3 276.3 11 257l2.9-3.8zm-143 298 155.6 146.4v-98.1l-86.1-53-69.5 4.6zm203.6 48.3v98.1L436 309l-69.5-4.6-86.1 53zM182.1 270l74.3 45.8 74.3-45.8-74.3-188.6zm-112.2-8.6 65.7-4.4 53.5-135.8zm307.2-4.4 65.7 4.4-119.2-140.2z"})
  );
}

export default LanDiceD10Regular;
