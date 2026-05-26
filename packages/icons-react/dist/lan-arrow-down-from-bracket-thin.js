import React from 'react';

export const LanArrowDownFromBracketThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 184c0 4.4-3.6 8-8 8s-8-3.6-8-8V96C0 43 43 0 96 0h256c53 0 96 43 96 96v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V96c0-44.2-35.8-80-80-80H96c-44.2 0-80 35.8-80 80zm365.7 173.7-152 152c-3.1 3.1-8.2 3.1-11.3 0l-152-152c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L216 484.7V168c0-4.4 3.6-8 8-8s8 3.6 8 8v316.7l138.3-138.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z"})
);

export default LanArrowDownFromBracketThin;
