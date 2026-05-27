import React from 'react';

export const CoreWifiSlashRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M33.2 192.9c13.8-15.6 28.9-30 45.1-43.2l45.6 45.6c-16.5 12.8-31.7 27.2-45.3 42.9l56.7 56.7c13.3-16.1 28.7-30.4 45.7-42.5l46.2 46.2c-17.8 11.1-33.5 25.4-46.3 41.9l52.6 52.6c13.5-16.5 31.7-29.1 52.5-35.8l78.4 78.4-44.1 44.2 44.1-44.1L78.3 149.7c-16.2 13.2-31.3 27.7-45.1 43.2m294.9-64.8 172 172 107.2-107.2c-58.8-66.2-140.2-111.8-232-125 91.8 13.2 173.1 58.9 231.9 125l-45.4 45.4c-57.1-65.7-140.4-108-233.8-110.2z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.2L19 0l45.3-45.3zm-257.2-76.2L320.2 480l-86.8-86.8c13.5-16.5 31.7-29.1 52.5-35.8zM227.2 298.7c-17.8 11.1-33.5 25.4-46.3 41.9L135.3 295c13.3-16.1 28.7-30.4 45.7-42.5zM123.9 195.4c-16.5 12.8-31.7 27.2-45.3 42.9L33.2 193c13.8-15.6 28.9-30 45.1-43.2zM320.3 64c114.2 0 216.7 49.9 287 129l-45.4 45.4c-57.1-65.7-140.4-108-233.8-110.2l-60.5-60.6c17.2-2.4 34.8-3.6 52.7-3.6"})
);

export default CoreWifiSlashRegular-duo;
