import React from 'react';

export const LanDrawPolygonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-59.3-48c9.5-23.5 32.5-40 59.3-40 35.3 0 64 28.7 64 64s-28.7 64-64 64c-1.9 0-3.9-.1-5.8-.3l-6.8 9.4-61.3 84.8c6.2 9.9 9.8 21.5 9.8 34.1s-3.6 24.2-9.8 34.1l61.3 84.8 6.8 9.4c1.9-.2 3.8-.3 5.8-.3 35.3 0 64 28.7 64 64s-28.7 64-64 64c-26.9 0-49.9-16.5-59.3-40H123.4c-9.5 23.5-32.5 40-59.3 40-35.3 0-64-28.7-64-64 0-26.9 16.5-49.9 40-59.3V123.4C16.5 113.9 0 90.9 0 64 0 28.7 28.7 0 64 0c26.9 0 49.9 16.5 59.3 40h265.3zm0 48H123.3c-6.5 16-19.3 28.9-35.3 35.3v265.3c16 6.5 28.9 19.3 35.3 35.3h265.3q3.9-9.6 10.5-17.4l-2.6-3.6-61.3-84.8q-7.35 1.8-15.3 1.8c-35.3 0-64-28.7-64-64s28.7-64 64-64q7.95 0 15.3 1.8l61.3-84.8 2.6-3.6q-6.6-7.8-10.5-17.4zM40 448a24 24 0 1 0 48 0 24 24 0 1 0-48 0m384 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0M296 256a24 24 0 1 0 48 0 24 24 0 1 0-48 0M64 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanDrawPolygonRegular;
