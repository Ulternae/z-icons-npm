import React from 'react';

export const LanMusicMagnifyingGlassSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 208c0 62.7-40.1 116-96 135.8v66.6c27.4-6.5 52.7-18.4 74.7-34.5l126.7 126.7c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L472 330.7c25.1-34.4 40-76.8 40-122.7C512 93.1 418.9 0 304 0 197.3 0 109.3 80.4 97.4 183.9l67.2-12.2C180.7 109.7 237 64 304 64c79.5 0 144 64.5 144 144m-144 16c0-7.1-3.2-13.9-8.6-18.4s-12.7-6.5-19.7-5.2l-176 32C88.3 234.5 80 244.4 80 256v161.6c-5.9-1.1-11.4-1.6-16-1.6-9.5 0-22.9 2.1-34.9 7.5C18 428.5 0 440.7 0 464s18 35.4 29.1 40.5c12 5.4 25.4 7.5 34.9 7.5s22.9-2.1 34.9-7.5c11.1-5 29.1-17.2 29.1-40.5V324.1l128-23.3v84.9c-5.9-1.1-11.4-1.6-16-1.6-9.5 0-22.9 2.1-34.9 7.5-11.1 5-29.1 17.2-29.1 40.5s18 35.4 29.1 40.5c11.9 5.4 25.4 7.5 34.9 7.5s22.9-2.1 34.9-7.5c11.1-5 29.1-17.2 29.1-40.5v-208z"})
);

export default LanMusicMagnifyingGlassSolid;
