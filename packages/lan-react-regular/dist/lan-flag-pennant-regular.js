import React from 'react';

export function LanFlagPennantRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24V350.9l384.9-137.5c9-3.2 15.1-11.8 15.1-21.4s-6-18.2-15.1-21.4L48 33.1zm0 60.1L350.1 192 48 299.9z"})
  );
}

export default LanFlagPennantRegular;
