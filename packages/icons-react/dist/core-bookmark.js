import React from 'react';

export const CoreBookmark = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 325.9c10.9 6.4 53.6 31.3 128 74.7V64H64v336.6c74.4-43.4 117.1-68.3 128-74.7M64 474.7 0 512V64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v448c-32-18.7-96-56-192-112z"})
);

export default CoreBookmark;
