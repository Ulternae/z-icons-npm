import React from 'react';

export const LanMusic = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m428.5 40.3-224 49.8c-7.3 1.6-12.5 8.1-12.5 15.6v74.4l256-56.9V55.9c0-10.2-9.5-17.8-19.5-15.6M448 276.4V156l-256 56.9v187.2c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c24.6 0 47 7.7 64 20.4V105.8c0-22.5 15.6-42 37.6-46.9L421.6 9c30-6.7 58.4 16.1 58.4 46.9V336c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c24.6 0 47 7.7 64 20.4m0 59.6c0-26.5-28.7-48-64-48s-64 21.5-64 48 28.7 48 64 48 64-21.5 64-48m-288 64c0-26.5-28.7-48-64-48s-64 21.5-64 48 28.7 48 64 48 64-21.5 64-48"})
);

export default LanMusic;
