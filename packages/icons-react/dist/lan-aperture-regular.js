import React from 'react';

export const LanApertureRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m256 464 67-116 13.8-23.8c0-.1.1-.1.1-.2l11.5-20 56.3 97.5C366.9 440.1 314.2 464 256 464m-92.4-256-56.3-97.5C145.1 71.9 197.8 48 256 48c-118.5 205.3-69.7 120.7-92.4 160m87.8-56 56.3-97.5c54.8 14 100.9 49.8 128.5 97.5zm104.1 68.3c-.1-.1-.1-.2-.2-.3l-11.5-20h112.6c5 17.8 7.6 36.6 7.6 56 0 37.9-10.1 73.4-27.8 104q-80.25-139.05-80.7-139.8zM48 256c0-37.9 10.1-73.4 27.8-104 51.6 89.4 82.4 142.7 92.4 160H55.6c-5-17.8-7.6-36.6-7.6-56m156.3 201.5c-54.8-14-100.9-49.8-128.5-97.5h184.8zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-39.3-300c4.3-7.4 12.1-11.9 20.6-12h37.3c8.5.1 16.3 4.6 20.5 11.8l18.7 32.3c4.2 7.4 4.2 16.4 0 23.8v.1l-18.5 32v.1a23.93 23.93 0 0 1-20.7 11.9h-37c-8.6 0-16.5-4.6-20.8-12l-18.5-32c-4.3-7.4-4.3-16.6 0-24l18.5-32z"})
);

export default LanApertureRegular;
