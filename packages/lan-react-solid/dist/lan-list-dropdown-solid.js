import React from 'react';

export function LanListDropdownSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v80h448V96c0-35.3-28.7-64-64-64zm384 192H0v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-328 56h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24M289.2 89.9c2.5-6 8.3-9.9 14.8-9.9h64c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-32 32c-6.2 6.2-16.4 6.2-22.6 0l-32-32c-4.6-4.6-5.9-11.5-3.5-17.4"})
  );
}

export default LanListDropdownSolid;
