import React from 'react';

export function CoreTextRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224.7 32H64C28.7 32 0 60.7 0 96v64h64V96h128v320h-64v64h192v-64h-64V96h128v64h64V96c0-35.3-28.7-64-64-64z"})
  );
}

export default CoreTextRegularDuo;
