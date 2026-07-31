import React from 'react';

export const LanFolderTree = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 48c0-8.8 7.2-16 16-16h49.5c3.2 0 6.2.9 8.9 2.7L426.3 56c7.9 5.3 17.2 8.1 26.6 8.1L528 64c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16zm-32 0v128c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-75.2c-3.2 0-6.2-.9-8.9-2.7L412.1 8.1C404.2 2.8 394.9 0 385.5 0H336c-26.5 0-48 21.5-48 48m48 272h49.5c3.2 0 6.2.9 8.9 2.7l33.9 22.6c6.6 4.4 14.3 6.7 22.2 6.7h77.6c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-192c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm-48 16v128c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-77.6c-1.6 0-3.1-.5-4.4-1.3l-33.9-22.6c-7.9-5.3-17.1-8.1-26.6-8.1H336c-26.5 0-48 21.5-48 48M32 24c0-8.8-7.2-16-16-16S0 15.2 0 24v376c0 26.5 21.5 48 48 48h192v-32H48c-8.8 0-16-7.2-16-16V160h208v-32H32z"})
);

export default LanFolderTree;
