import React from 'react';

export const LanArrowUpToDottedLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32m333.7 282.3-152-152c-3.1-3.1-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L184 155.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8V155.3l138.3 138.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3zM88 16a16 16 0 1 0 32 0 16 16 0 1 0-32 0M192 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32m72 16a16 16 0 1 0 32 0 16 16 0 1 0-32 0M368 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32"})
);

export default LanArrowUpToDottedLineThin;
