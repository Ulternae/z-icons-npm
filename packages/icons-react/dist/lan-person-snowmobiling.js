import React from 'react';

export const LanPersonSnowmobiling = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 32a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112m174.3-39.2c-4-7.9-13.6-11.1-21.5-7.2s-11.1 13.6-7.2 21.5l27.3 54.6-28.1 33.7-115-35.9c-7.6-2.4-15.5-3.6-23.4-3.6-43.3 0-78.5 35.1-78.5 78.5v10.2c-22.7 3.8-40 23.6-40 47.3v64c-19.4 14.6-32 37.8-32 64 0 44.2 35.8 80 80 80h160c44.2 0 80-35.8 80-80 0-18-6-34.6-16-48H358l48 96h-38.1c-8.8 0-16 7.2-16 16s7.2 16 16 16h104c22.1 0 40-17.9 40-40v-8c0-8.8-7.2-16-16-16s-16 7.2-16 16v8c0 4.4-3.6 8-8 8h-30.1l-48-96h14.1c57.4 0 104-46.6 104-104v-8c0-5.6-2.9-10.8-7.8-13.7l-156-93.6-29.9-59.8zM104 224v-9.5c0-25.7 20.8-46.5 46.5-46.5 4.7 0 9.4.7 13.9 2.1l102.4 32-18.2 21.9H104.1zm96 96H80c-5.5 0-10.8.6-16 1.6V272c0-8.8 7.2-16 16-16h176c4.7 0 9.3-2.1 12.3-5.8l71.2-85.5L480 249c-.6 39.3-32.6 70.9-72 70.9H200zM80 352h160c26.5 0 48 21.5 48 48s-21.5 48-48 48H80c-26.5 0-48-21.5-48-48s21.5-48 48-48"})
);

export default LanPersonSnowmobiling;
