import React from 'react';

export function LanLeftFromDottedLineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M7 273c-9.4-9.4-9.4-24.6 0-33.9L151 95c6.9-6.9 17.2-8.9 26.2-5.2S192 102.3 192 112v64h144c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H192v64c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2zm249 15h80v-64H168c-13.3 0-24-10.7-24-24v-30.1L57.9 256l86.1 86.1V312c0-13.3 10.7-24 24-24zM512 96a32 32 0 1 1-64 0 32 32 0 1 1 64 0m0 106.7a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 138.6a32 32 0 1 1 0-64 32 32 0 1 1 0 64m32 74.7a32 32 0 1 1-64 0 32 32 0 1 1 64 0"})
  );
}

export default LanLeftFromDottedLineRegular;
