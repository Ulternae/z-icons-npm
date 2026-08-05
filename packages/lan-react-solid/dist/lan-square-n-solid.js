import React from 'react';

export function LanSquareNSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm106.6 120.8 101.4 124V168c0-13.3 10.7-24 24-24s24 10.7 24 24v176c0 10.1-6.4 19.2-15.9 22.6s-20.2.4-26.6-7.4L176 235.2V344c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-10.1 6.4-19.2 15.9-22.6s20.2-.4 26.6 7.4z"})
  );
}

export default LanSquareNSolid;
