import React from 'react';

export function LanTally1Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 40c13.3 0 24 10.7 24 24v384c0 13.3-10.7 24-24 24S8 461.3 8 448V64c0-13.3 10.7-24 24-24"})
  );
}

export default LanTally1Regular;
