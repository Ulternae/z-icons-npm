import React from 'react';

export const LanFolderUserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 400H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h138.7c3.5 0 6.8 1.1 9.6 3.2l38.4 28.8c13.8 10.4 30.7 16 48 16H448c8.8 0 16 7.2 16 16v240c0 8.8-7.2 16-16 16M64 448h384c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H298.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8C230 36.5 216.5 32 202.7 32H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64m192-176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-77.5 52.6c-11.1 11.6.1 27.4 16.1 27.4h122.7c16 0 27.2-15.9 16.1-27.4-12.1-12.7-29.2-20.6-48.2-20.6h-58.7c-18.9 0-36 7.9-48.2 20.6z"})
);

export default LanFolderUserRegular;
