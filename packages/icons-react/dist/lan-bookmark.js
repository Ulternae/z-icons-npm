import React from 'react';

export const LanBookmark = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v426c0 18.6-20.2 30.1-36.2 20.7L192 418.6l-155.8 92c-16 9.5-36.2-2-36.2-20.6zm64-32c-17.7 0-32 14.3-32 32v412l147.8-87.3c7.5-4.5 16.9-4.5 24.4 0L352 476V64c0-17.7-14.3-32-32-32z"})
);

export default LanBookmark;
