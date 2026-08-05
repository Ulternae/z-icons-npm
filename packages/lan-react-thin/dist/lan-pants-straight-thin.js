import React from 'react';

export function LanPantsStraightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M49.5 16C31 16 16.4 31.6 17.6 50l2.9 46h82c4.4 0 8 3.6 8 8s-3.6 8-8 8h-81l22.1 354c1.1 16.9 15 30 31.9 30h141V184c0-4.4 3.6-8 8-8s8 3.6 8 8v312h136.8c16.9 0 30.9-13.1 31.9-30l22.1-354h-81c-4.4 0-8-3.6-8-8s3.6-8 8-8h82l2.9-46c1.1-18.4-13.5-34-31.9-34zm175 496h-149c-25.3 0-46.3-19.7-47.9-45L1.6 51C-.1 23.4 21.8 0 49.5 0h345.8c27.7 0 49.6 23.4 47.9 51l-26 416c-1.6 25.3-22.6 45-47.9 45z"})
  );
}

export default LanPantsStraightThin;
