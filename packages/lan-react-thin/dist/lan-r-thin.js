import React from 'react';

export function LanRThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V288h166.4l2.9 4.4 120 184c2.4 3.7 7.4 4.7 11.1 2.3s4.7-7.4 2.3-11.1l-117.4-180c66.4-4.7 118.7-60 118.7-127.6 0-70.7-57.3-128-128-128zm168 240H16V48h176c61.9 0 112 50.1 112 112s-50.1 112-112 112z"})
  );
}

export default LanRThin;
