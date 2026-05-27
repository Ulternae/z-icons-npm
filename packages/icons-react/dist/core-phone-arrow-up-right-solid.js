import React from 'react';

export const CorePhoneArrowUpRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M83.1 29.3c25-25 65.5-25 90.5 0l53.5 53.5c25 25 25 65.5 0 90.5l-49.4 49.4c-.8.8-1.1 2-.8 3.2 14.6 53.4 56.3 95.1 109.7 109.7 1.1.3 2.3 0 3.2-.8l49.4-49.4c25-25 65.5-25 90.5 0l53.5 53.5c25 25 25 65.5 0 90.5l-26.9 26.9c-45 44.9-109.6 64.7-172 52.8-141.9-27-253.7-138.9-280.8-280.8-11.9-62.4 7.8-127 52.8-172zM480.6 4c7.4 0 14.6 2.9 19.8 8.2s8.2 12.4 8.2 19.8v156h-56V99.6L340.4 211.8l-19.8 19.8L281 192l19.8-19.8L413 60h-88.4V4z"})
);

export default CorePhoneArrowUpRightSolid;
