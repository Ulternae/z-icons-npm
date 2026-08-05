import React from 'react';

export function LanChartSimpleHorizontal({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 48v32c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16M336 0H48C21.5 0 0 21.5 0 48v32c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48m80 272c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16zm32-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM224 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16zm32-32c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48z"})
  );
}

export default LanChartSimpleHorizontal;
