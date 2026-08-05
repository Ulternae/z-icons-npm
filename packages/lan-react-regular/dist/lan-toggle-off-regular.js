import React from 'react';

export function LanToggleOffRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 112c79.5 0 144 64.5 144 144s-64.5 144-144 144H192c-79.5 0-144-64.5-144-144s64.5-144 144-144zm192 144c0-106-86-192-192-192H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192m-336 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-144 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0"})
  );
}

export default LanToggleOffRegular;
