import React from 'react';

export function LanLightEmergencyOnThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m44.1 33.1 80 48c3.8 2.3 5 7.2 2.7 11s-7.2 5-11 2.7l-80-48c-3.8-2.3-5-7.2-2.7-11s7.2-5 11-2.7m560 13.7-80 48c-3.8 2.3-8.7 1-11-2.7s-1-8.7 2.7-11l80-48c3.8-2.3 8.7-1 11 2.7s1 8.7-2.7 11M8 192h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8m544 0h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8m-72 128h16c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h16V192c0-88.4 71.6-160 160-160s160 71.6 160 160zm-16 0V192c0-79.5-64.5-144-144-144s-144 64.5-144 144v128zm-352 48v64c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H144c-17.7 0-32 14.3-32 32m216-256c-48.6 0-88 39.4-88 88 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-57.4 46.6-104 104-104 4.4 0 8 3.6 8 8s-3.6 8-8 8"})
  );
}

export default LanLightEmergencyOnThin;
