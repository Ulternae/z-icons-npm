import React from 'react';

export function LanMoneyCheckPenSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 543.9',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32.1 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v72.5c-21.2 3.3-41.6 13.1-57.9 29.4L315.8 400.2c-13.3 13.3-23 29.8-28.3 47.8H96.1c-35.3 0-64-28.7-64-64zm96 184c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-144c-13.3 0-24 10.7-24 24m24-136c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24zm180.2 290.9c2.5-12.4 8.6-23.8 17.5-32.7l118.9-118.9 80 80-118.9 118.9c-8.9 8.9-20.3 15-32.7 17.5l-59.6 11.9c-.9.2-1.9.3-2.9.3-8 0-14.6-6.5-14.6-14.6 0-1 .1-1.9.3-2.9l11.9-59.6zm267.8-123-28.8 28.8-80-80 28.8-28.8c22.1-22.1 57.9-22.1 80 0s22.1 57.9 0 80"})
  );
}

export default LanMoneyCheckPenSolid;
