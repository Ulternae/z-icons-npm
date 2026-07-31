import React from 'react';

export const LanArrowDownFromDottedLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M197.7 509.7c-3.1 3.1-8.2 3.1-11.3 0l-152-152c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L184 484.7V136c0-4.4 3.6-8 8-8s8 3.6 8 8v348.7l138.3-138.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-152 152zM16 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32m104 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0m72-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m104 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0m72-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanArrowDownFromDottedLineThin;
