import React from 'react';

export const LanFolderTreeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24v368c0 30.9 25.1 56 56 56h184v-48H56c-4.4 0-8-3.6-8-8V160h192v-48H48zm337.5 24 31.9 21.3c10.5 7 22.9 10.7 35.5 10.7h75.2v96h-192V48h49.5zM288 48v128c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-75.2c-3.2 0-6.2-.9-8.9-2.7L412.1 8.1C404.2 2.8 394.9 0 385.5 0H336c-26.5 0-48 21.5-48 48m97.5 288 33.9 22.6c9.2 6.1 20 9.4 31.1 9.4h77.6v96h-192V336h49.5zm-97.5 0v128c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-77.6c-1.6 0-3.1-.5-4.4-1.3l-33.9-22.6c-7.9-5.3-17.1-8.1-26.6-8.1H336c-26.5 0-48 21.5-48 48"})
);

export default LanFolderTreeRegular;
