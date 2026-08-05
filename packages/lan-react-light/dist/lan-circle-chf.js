import React from 'react';

export function LanCircleChf({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512M140 144c-24.3 0-44 19.7-44 44v136c0 24.3 19.7 44 44 44s44-19.7 44-44v-4c0-8.8-7.2-16-16-16s-16 7.2-16 16v4c0 6.6-5.4 12-12 12s-12-5.4-12-12V188c0-6.6 5.4-12 12-12s12 5.4 12 12v4c0 8.8 7.2 16 16 16s16-7.2 16-16v-4c0-24.3-19.7-44-44-44m100 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h32v80c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v80h-32zm112-16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24v-64h32c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
  );
}

export default LanCircleChf;
