import React from 'react';

export const LanTagThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48.5 229.5c0 12.7 5.1 24.9 14.1 33.9l208 208c18.7 18.7 49.1 18.7 67.9 0l133.4-133.5c18.7-18.7 18.7-49.1 0-67.9l-208-208c-9-9-21.2-14.1-33.9-14.1L96.5 48c-26.5 0-48 21.5-48 48zm-16 0V96c0-35.3 28.7-64 64-64H230c17 0 33.3 6.7 45.3 18.7l208 208c25 25 25 65.5 0 90.5L349.7 482.7c-25 25-65.5 25-90.5 0l-208-208c-12-12-18.7-28.3-18.7-45.3zm112-117.5a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
);

export default LanTagThin;
