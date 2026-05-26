import React from 'react';

export const LanCodeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M337.1 16.9c3.9-12.7 17.4-19.7 30-15.8s19.7 17.4 15.8 30l-144 464c-3.9 12.7-17.4 19.7-30 15.8s-19.7-17.4-15.8-30zM145 135c9.4 9.4 9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L111 135c9.4-9.4 24.6-9.4 33.9 0zm286 0c9.4-9.4 24.6-9.4 33.9 0L569 239c9.4 9.4 9.4 24.6 0 33.9L465 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9z"})
);

export default LanCodeRegular;
