import React from 'react';

export function LanSproutRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M475.3.2C491.4 1.8 504 15.4 504 32v32l-.3 11.5C497.9 190 406 281.9 291.5 287.7l-11.5.3v200c0 13.3-10.7 24-24 24s-24-10.7-24-24V352h-8C104.2 352 6.3 257.9.3 139.5L0 128V96c0-17.7 14.3-32 32-32h24l11.5.3c72 3.7 135 41.4 173.3 97.3C266.8 71.8 347.5 5.2 444.4.3l11.5-.3h16l3.3.2zM48 128c0 97.2 78.8 176 176 176h8v-16c0-97.2-78.8-176-176-176h-8zm408-80c-97.2 0-176 78.8-176 176v16c97.2 0 176-78.8 176-176z"})
  );
}

export default LanSproutRegular;
