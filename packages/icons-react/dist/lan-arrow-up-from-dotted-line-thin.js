import React from 'react';

export const LanArrowUpFromDottedLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M197.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L184 27.3V376c0 4.4 3.6 8 8 8s8-3.6 8-8V27.3l138.3 138.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-152-152zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16m72 16c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16m104-16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16m72 16c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16m104-16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16"})
);

export default LanArrowUpFromDottedLineThin;
