import React from 'react';

export function LanARegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M214.1 46.7C210.4 37.8 201.7 32 192 32s-18.4 5.8-22.1 14.7l-168 400c-5.1 12.2.6 26.3 12.8 31.4s26.3-.6 31.4-12.8L80.2 384h223.5l34.1 81.3c5.1 12.2 19.2 18 31.4 12.8s18-19.2 12.8-31.4l-168-400zM283.6 336H100.5l91.6-218 91.6 218z"})
  );
}

export default LanARegular;
