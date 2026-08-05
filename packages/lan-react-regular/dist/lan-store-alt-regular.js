import React from 'react';

export function LanStoreAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M121.2 88.8c2.7-5.4 8.3-8.8 14.3-8.8h304.9c6.1 0 11.6 3.4 14.3 8.8l56.8 113.7c.3.5.4 1.1.4 1.7 0 2.1-1.7 3.8-3.8 3.8H67.8c-2.1 0-3.8-1.7-3.8-3.8 0-.6.1-1.2.4-1.7zM16 204.2c0 27.3 21.2 49.7 48 51.6v176.1c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-176h112v200c0 13.3 10.7 24 24 24s24-10.7 24-24V255.8c26.8-1.9 48-24.3 48-51.6 0-8-1.9-16-5.5-23.2L497.7 67.4c-10.9-21.7-33-35.4-57.3-35.4H135.6c-24.2 0-46.4 13.7-57.2 35.4L21.5 181.1c-3.6 7.2-5.5 15.1-5.5 23.2zM112 336v-80h192v80zm0 48h192v48H112z"})
  );
}

export default LanStoreAltRegular;
