import React from 'react';

export const LanMusicMagnifyingGlassThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 208c0 83.6-53.4 154.7-128 181.1V406c29.1-9.4 55.4-25 77.3-45.3l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C491 312.2 512 262.6 512 208 512 93.1 418.9 0 304 0 195 0 105.5 83.9 96.7 190.7c5.2-2.9 10.8-5.1 16.8-6.5C125.2 89.4 206 16 304 16c106 0 192 86 192 192m-176 1.8c0-10.1-9.3-17.7-19.3-15.7l-176 36.7c-7.4 1.5-12.7 8.1-12.7 15.7v179.2c-11.7-10.8-28.9-17.6-48-17.6-35.4 0-64 23.3-64 52s28.6 52 64 52 64-23.3 64-52V326.5l176-36.7v103.9c-11.7-10.8-28.9-17.6-48-17.6-35.4 0-64 23.3-64 52s28.6 52 64 52 64-23.3 64-52zm-16 63.7-176 36.7v-63.7l176-36.7zM64 424.1c29.7 0 48 19 48 36s-18.3 36-48 36-48-19-48-36 18.3-36 48-36m240 4c0 17-18.3 36-48 36s-48-19-48-36 18.3-36 48-36 48 19 48 36"})
);

export default LanMusicMagnifyingGlassThin;
