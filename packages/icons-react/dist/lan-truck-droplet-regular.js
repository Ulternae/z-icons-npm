import React from 'react';

export const LanTruckDropletRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 80c8.8 0 16 7.2 16 16v260.1c-13.6 11.2-23.8 26.5-28.7 43.9H236.7c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM64 448h3.3c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h102.6c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h3.3c35.3 0 64-28.7 64-64V232.6c0-17-6.7-33.3-18.7-45.3l-40.6-40.6c-12-12-28.3-18.7-45.3-18.7H416V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64m352-272h55.4c4.2 0 8.3 1.7 11.3 4.7l40.6 40.6c3 3 4.7 7.1 4.7 11.3V256H416zm0 160.4V304h112v80c0 8.8-7.2 16-16 16h-3.3c-10.4-36.9-44.4-64-84.7-64-2.7 0-5.4.1-8 .4M112 424a40 40 0 1 1 80 0 40 40 0 1 1-80 0m272 0a40 40 0 1 1 80 0 40 40 0 1 1-80 0M208 304c39.8 0 72-24 72-72 0-33.2-34.5-78-55.8-102.4-8.7-10-23.8-10-32.5 0-21.2 24.4-55.8 69.1-55.8 102.4 0 39.8 32.2 72 72 72z"})
);

export default LanTruckDropletRegular;
