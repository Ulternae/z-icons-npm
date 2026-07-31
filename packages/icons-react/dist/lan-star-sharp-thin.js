import React from 'react';

export const LanStarSharpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16c-1.3 0-2.4.8-2.8 2l-53.6 168.4c-1.1 3.3-4.1 5.6-7.6 5.6H18.9c-1.6 0-2.9 1.3-2.9 2.9 0 .9.4 1.7 1 2.2l140.1 116.8c2.5 2.1 3.5 5.4 2.5 8.5l-52.2 171.7c-.3.9.4 1.9 1.4 1.9q.45 0 .9-.3l141.4-110a8.1 8.1 0 0 1 9.8 0l141.4 110q.45.3.9.3c1 0 1.7-.9 1.4-1.9l-52.3-171.8c-.9-3.1.1-6.4 2.5-8.5L495 197.1c.7-.6 1-1.4 1-2.2 0-1.6-1.3-2.9-2.9-2.9H320c-3.5 0-6.6-2.3-7.6-5.6L258.8 18c-.4-1.2-1.5-2-2.8-2m-18-2.8C240.5 5.3 247.8 0 256 0s15.5 5.3 18 13.2L325.8 176h167.3c10.4 0 18.9 8.5 18.9 18.9 0 5.6-2.5 10.9-6.8 14.5l-136 113.3 50.7 166.7c3.4 11.2-5 22.5-16.7 22.5-3.9 0-7.7-1.3-10.7-3.7L256 402.1 119.5 508.3c-3.1 2.4-6.8 3.7-10.7 3.7-11.7 0-20.1-11.3-16.7-22.5l50.7-166.7-136-113.3c-4.3-3.7-6.8-9-6.8-14.6C0 184.5 8.5 176 18.9 176h167.3z"})
);

export default LanStarSharpThin;
