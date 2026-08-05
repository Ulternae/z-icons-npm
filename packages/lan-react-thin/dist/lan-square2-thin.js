import React from 'react';

export function LanSquare2Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm168 65.3h73.8c25.5 0 46.2 20.7 46.2 46.3 0 18-10.4 34.4-26.8 41.9L208.4 274c-19.8 9.2-32.4 29-32.4 50.8V336h104c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-19.2c0-28 16.3-53.5 41.7-65.3l52.8-24.5c10.7-5 17.5-15.7 17.5-27.4 0-16.7-13.5-30.3-30.2-30.3H168c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
  );
}

export default LanSquare2Thin;
