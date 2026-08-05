import React from 'react';

export function LanLandmarkRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M242.9 11.9c8-5.2 18.3-5.2 26.3 0l232 152c8.9 5.8 12.9 16.8 9.8 26.9S498.6 208 488 208h-40v160h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V208H24c-10.6 0-20-7-23-17.1s1-21.1 9.8-26.9l232-152zM112 368h64V208h-64zm112 0h64V208h-64zm112 0h64V208h-64zM104.4 160h303.2L256 60.7zM24 464h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanLandmarkRegular;
