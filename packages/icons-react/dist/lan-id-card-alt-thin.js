import React from 'react';

export const LanIdCardAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224-16h128c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V0c0-8.8 7.2-16 16-16M192 0v48c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V0c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32m-48 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64h-80v16h80c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h80zm96 192a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M192 392c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56 0 4.4 3.6 8 8 8s8-3.6 8-8c0-39.8-32.2-72-72-72h-80c-39.8 0-72 32.2-72 72 0 4.4 3.6 8 8 8s8-3.6 8-8"})
);

export default LanIdCardAltThin;
