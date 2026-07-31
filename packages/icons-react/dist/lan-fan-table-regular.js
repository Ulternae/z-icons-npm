import React from 'react';

export const LanFanTableRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 400a176 176 0 1 0 0-352 176 176 0 1 0 0 352m224-176c0 115.6-87.6 210.8-200 222.7V464h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24s10.7-24 24-24h112v-17.3C87.6 434.8 0 339.6 0 224 0 100.3 100.3 0 224 0s224 100.3 224 224m-329.6-26.4c-16.6-41 3.2-87.6 44.2-104.1 12.3-5 26.3 1 31.2 13.3L223 179c16.7-23.7 45.8-37.5 76.6-33.2 43.8 6.1 74.2 46.6 68.1 90.4-1.8 13.1-14 22.3-27.1 20.4l-77.1-10.8c12.2 26.4 9.6 58.4-9.6 82.9-27.2 34.8-77.5 41-112.3 13.8-10.4-8.2-12.3-23.2-4.1-33.7l47.9-61.4c-28.9-2.6-55.4-21-67-49.7zM224 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanFanTableRegular;
