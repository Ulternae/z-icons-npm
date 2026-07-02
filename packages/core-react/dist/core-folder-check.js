import React from 'react';

export function CoreFolderCheck({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M288 96h160c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h160zM64 416h384V160H261.5l-64-64H64zm311.6-176-19.8 19.8-112 112c-10.9 10.9-28.7 10.9-39.6 0L136.4 304l39.6-39.6 48 48 92.2-92.2 19.8-19.8z"})
  );
}

export default CoreFolderCheck;
