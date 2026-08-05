import React from 'react';

export function LanCancerRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M408 152c57.4 0 104 46.6 104 104 0 141.4-114.6 256-256 256-54.4 0-104.8-17-146.3-45.9-10.9-7.6-13.5-22.5-5.9-33.4s22.5-13.5 33.4-6C170.9 450.2 211.8 464 256 464c78.9 0 147.5-43.9 182.8-108.7-9.7 3-20.1 4.7-30.8 4.7-57.4 0-104-46.6-104-104s46.6-104 104-104M256 0c54.4 0 104.8 17 146.3 45.9 10.9 7.6 13.5 22.5 5.9 33.4s-22.5 13.5-33.4 6C341.1 61.8 300.2 48 256 48c-78.9 0-147.6 43.9-182.8 108.6 9.7-3 20.1-4.6 30.8-4.6 57.4 0 104 46.6 104 104s-46.6 104-104 104S0 313.4 0 256c0-1.9.1-3.8.2-5.7C3.2 111.5 116.5 0 256 0M104 200a56 56 0 1 0 0 112 56 56 0 1 0 0-112m304 0a56 56 0 1 0 0 112 56 56 0 1 0 0-112"})
  );
}

export default LanCancerRegular;
