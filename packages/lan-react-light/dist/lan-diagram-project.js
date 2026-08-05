import React from 'react';

export function LanDiagramProject({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zm99.9 159.8c-1.3.1-2.6.2-3.9.2H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v32h128V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-32H192v32c0 13.4-5.5 25.5-14.3 34.2l58.5 77.9c1.3-.1 2.6-.2 3.9-.2h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-13.4 5.5-25.5 14.3-34.2zM240 320c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16zm112-176v32c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16z"})
  );
}

export default LanDiagramProject;
