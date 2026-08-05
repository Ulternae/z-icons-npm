import React from 'react';

export function LanFileBinarySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h149.5c17 0 33.3 6.7 45.3 18.7l106.5 106.6c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm208-5.5V152c0 13.3 10.7 24 24 24h93.5zM120 256c-30.9 0-56 25.1-56 56v48c0 30.9 25.1 56 56 56h16c30.9 0 56-25.1 56-56v-48c0-30.9-25.1-56-56-56zm-8 56c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8zm136-56c-13.3 0-24 10.7-24 24s10.7 24 24 24v64c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24v-88c0-13.3-10.7-24-24-24z"})
  );
}

export default LanFileBinarySolid;
