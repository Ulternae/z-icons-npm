import React from 'react';

export const LanArrowUpFromBracketThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M229.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L216 27.3V344c0 4.4 3.6 8 8 8s8-3.6 8-8V27.3l138.3 138.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-152-152zM16 328c0-4.4-3.6-8-8-8s-8 3.6-8 8v88c0 53 43 96 96 96h256c53 0 96-43 96-96v-88c0-4.4-3.6-8-8-8s-8 3.6-8 8v88c0 44.2-35.8 80-80 80H96c-44.2 0-80-35.8-80-80z"})
);

export default LanArrowUpFromBracketThin;
