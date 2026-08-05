import React from 'react';

export function LanNairaSign({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M93.2 38.9c-4-5.8-11.2-8.3-17.9-6.2S64 41 64 48v208H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v176c0 8.8 7.2 16 16 16s16-7.2 16-16V288h130.7l128.2 185.1c4 5.8 11.2 8.3 17.9 6.2S384 471 384 464V288h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v208H243.5zM265.6 288H352v124.8zm-61.1-32H96V99.2z"})
  );
}

export default LanNairaSign;
