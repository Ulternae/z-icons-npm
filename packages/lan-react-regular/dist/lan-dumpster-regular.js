import React from 'react';

export function LanDumpsterRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m132.3 64-25.6 128H24c-13.3 0-24-10.7-24-24v-4.1c0-2.6.4-5.1 1.2-7.6l25.3-75.9C29.8 70.6 39 64 49.3 64zm23.4 128 25.6-128H264v128zM312 64h82.7l25.6 128H312zm131.7 0h83c10.3 0 19.5 6.6 22.8 16.4l25.3 75.9c.8 2.4 1.2 5 1.2 7.6v4.1c0 13.3-10.7 24-24 24h-82.7zm-416 176h520.7l-4.7 27.9-32 192c-2.2 13.1-14.5 21.9-27.6 19.7s-21.9-14.5-19.7-27.6l.7-4.1h-354l.7 4.1c2.2 13.1-6.7 25.4-19.7 27.6s-25.6-6.6-27.8-19.7l-32-192-4.7-27.9zM103 400h370l18.7-112H84.4l18.7 112z"})
  );
}

export default LanDumpsterRegular;
