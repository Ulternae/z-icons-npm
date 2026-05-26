import React from 'react';

export const LanFaceNauseatedThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m164 17.6c19.3 11.2 33 31.1 35.6 54.4h112.9c2.6-23.3 16.2-43.2 35.6-54.4 3.8-2.2 8.7-.9 10.9 2.9s.9 8.7-2.9 10.9c-16.8 9.7-28 27.8-28 48.5s11.2 38.8 28 48.5c3.8 2.2 5.1 7.1 2.9 10.9s-7.1 5.1-10.9 2.9c-19.3-11.2-33-31.1-35.6-54.4H199.6c-2.6 23.3-16.2 43.2-35.6 54.4-3.8 2.2-8.7.9-10.9-2.9s-.9-8.7 2.9-10.9c16.8-9.7 28-27.8 28-48.5s-11.2-38.8-28-48.5c-3.8-2.2-5.1-7.1-2.9-10.9s7.1-5.1 10.9-2.9M336 192a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-144 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-12.4-72.8-64 32c-4 2-8.8.4-10.7-3.6s-.4-8.8 3.6-10.7l64-32c4-2 8.8-.4 10.7 3.6s.4 8.8-3.6 10.7m149.3-10.7c2-4 6.8-5.6 10.7-3.6l64 32c4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6l-64-32c-4-2-5.6-6.8-3.6-10.7"})
);

export default LanFaceNauseatedThin;
