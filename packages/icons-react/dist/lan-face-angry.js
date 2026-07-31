import React from 'react';

export const LanFaceAngry = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-144c25.6 0 48.7 10.4 65.4 27.3 6.2 6.3 16.3 6.3 22.6.1s6.3-16.3.1-22.6C321.6 350.1 290.5 336 256 336s-65.6 14.1-88.1 36.7c-6.2 6.3-6.2 16.4.1 22.6s16.4 6.2 22.6-.1c16.7-16.8 39.8-27.2 65.4-27.2m-80-104c13.3 0 24-10.7 24-24 0-2.6-.4-5.2-1.2-7.5l20.1 6.7c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l39.4 13.1c-6.2 4.3-10.3 11.5-10.3 19.7 0 13.3 10.7 24 24 24m184-24c0-8.2-4.1-15.4-10.3-19.7l39.4-13.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l20.1-6.7q-1.2 3.6-1.2 7.5c0 13.3 10.7 24 24 24s24-10.7 24-24"})
);

export default LanFaceAngry;
