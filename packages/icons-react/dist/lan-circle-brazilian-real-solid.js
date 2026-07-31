import React from 'react';

export const LanCircleBrazilianRealSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m96-384c8.8 0 16 7.2 16 16v8h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-33.8c-7.8 0-14.2 6.3-14.2 14.2 0 5.8 3.5 11 8.9 13.1l32 12.8c23.6 9.4 39.1 32.3 39.1 57.7 0 26.5-16.6 49.2-40 58.1V368c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h33.8c7.8 0 14.2-6.3 14.2-14.2 0-5.8-3.5-11-8.9-13.1l-32-12.8c-23.6-9.4-39.1-32.3-39.1-57.7 0-32.3 24.6-58.8 56-61.9V144c0-8.8 7.2-16 16-16m-216 16h48c39.8 0 72 32.2 72 72 0 26.9-14.7 50.3-36.5 62.6l19.3 57.8c4.2 12.6-2.6 26.2-15.2 30.4s-26.2-2.6-30.4-15.2L172 288h-12v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3 10.7-24 24-24m48 96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-24v48z"})
);

export default LanCircleBrazilianRealSolid;
