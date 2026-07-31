import React from 'react';

export const LanMusicRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m422.3 56.1-224 49.8c-3.7.8-6.3 4.1-6.3 7.8v48.4l240-53.3V63.9c0-5.1-4.7-8.9-9.7-7.8m9.7 210.6V157.9l-240 53.3v188.7c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c17.5 0 33.9 3.9 48 10.7v-217c0-26.2 18.2-49 43.9-54.7l224-49.8c35-7.8 68.1 18.8 68.1 54.7V336c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c17.5 0 33.9 3.9 48 10.7m0 69.3c0-17.7-21.5-32-48-32s-48 14.3-48 32 21.5 32 48 32 48-14.3 48-32m-288 64c0-17.7-21.5-32-48-32s-48 14.3-48 32 21.5 32 48 32 48-14.3 48-32"})
);

export default LanMusicRegular;
