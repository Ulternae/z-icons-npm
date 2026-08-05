import React from 'react';

export function LanShirtLongSleeveSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 112c44.2 0 80-35.8 80-80h41c37.8 0 72 22.2 87.5 56.6l53.6 119.2c6.5 14.4 9.9 30.1 9.9 46V416c0 17.7-14.3 32-32 32h-32V248c0-13.3-10.7-24-24-24s-24 10.7-24 24v200c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V248c0-13.3-10.7-24-24-24s-24 10.7-24 24v200H48c-17.7 0-32-14.3-32-32V253.7c0-15.8 3.4-31.5 9.9-46L79.5 88.6C95 54.2 129.3 32 167 32h41c0 44.2 35.8 80 80 80"})
  );
}

export default LanShirtLongSleeveSolid;
