import React from 'react';

export const LanUserPenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176.1 128a80 80 0 1 1 160 0 80 80 0 1 1-160 0m208 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-304 352c0-70.7 57.3-128 128-128h96c17.7 0 34.6 3.6 49.9 10.1l35.8-35.8c-25.4-14.2-54.6-22.3-85.7-22.3h-96c-97.2 0-176 78.8-176 176v8c0 13.3 10.7 24 24 24s24-10.7 24-24zm252.2-13.1-11.9 59.6c-.2.9-.3 1.9-.3 2.9 0 8 6.5 14.6 14.6 14.6 1 0 1.9-.1 2.9-.3l59.6-11.9c12.4-2.5 23.8-8.6 32.7-17.5l118.9-118.9-80-80-118.9 118.9c-8.9 8.9-15 20.3-17.5 32.7zm267.8-123c22.1-22.1 22.1-57.9 0-80s-57.9-22.1-80 0l-28.8 28.8 80 80z"})
);

export default LanUserPenRegular;
