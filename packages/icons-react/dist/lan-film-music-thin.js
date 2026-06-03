import React from 'react';

export const LanFilmMusicThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 136V48h-32c-26.5 0-48 21.5-48 48v40zm-80 16v96h80v-96zm-16 0V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v103.8l-16 3.3V160h-80v63.1c-6.1 3.5-11.4 7.9-16 13.1V48H176v416h100.2c-1.6 5.1-2.8 10.4-3.4 16H128c-35.3 0-64-28.7-64-64zm16 112v96h80v-96zm80 112H80v40c0 26.5 21.5 48 48 48h32zm256-232h80V96c0-26.5-21.5-48-48-48h-32zm224 97.7V460c0 28.7-28.6 52-64 52s-64-23.3-64-52 28.6-52 64-52c19.1 0 36.3 6.8 48 17.6V321.7l-176 36.7V492c0 28.7-28.6 52-64 52s-64-23.3-64-52 28.6-52 64-52c19.1 0 36.3 6.8 48 17.6V278.4c0-7.6 5.3-14.1 12.7-15.7l176-36.7c9.9-2.1 19.3 5.5 19.3 15.7m-16 63.7v-63.7l-176 36.7v63.7zM384 455.9c-29.7 0-48 19-48 36s18.3 36 48 36 48-19 48-36-18.3-36-48-36m240 4c0-17-18.3-36-48-36s-48 19-48 36 18.3 36 48 36 48-19 48-36"})
);

export default LanFilmMusicThin;
