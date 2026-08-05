import React from 'react';

export function MinaCloudOff({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m2.875 21 2.793-2.793M20.875 3l-5.532 5.532m0 0q.413.803.68 1.831c4.041 0 7.933 4.23 4.255 7.384-.91.78-2.245 1.003-3.406 1.003H8.026c-.827 0-1.632-.19-2.358-.543m9.675-9.675-9.675 9.675M3.24 16C-1.307 9.542 7.728 3 13 6"})
  );
}

export default MinaCloudOff;
