import React from 'react';

export const LanBridgeLockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h16v64H24c-13.3 0-24 10.7-24 24v88c0 9.1 5.1 17.4 13.3 21.5l3.8 1.9c19 9.5 31 28.9 31 50.1L48 440c0 22.1 17.9 40 40 40h64c22.1 0 40-17.9 40-40v-72c0-35.3 28.7-64 64-64 29.3 0 54 19.7 61.6 46.6 5-8.3 11.2-15.8 18.4-22.2V304c0-4.6.2-9.2.7-13.6-20.4-21.2-49-34.4-80.7-34.4-61.9 0-112 50.1-112 112v64H96V329.4c0-35.7-18.3-68.7-48-87.6V192h354c18.4-10.2 39.5-16 62-16 17 0 33.2 3.3 48 9.3V168c0-13.3-10.7-24-24-24h-16V80h16c13.3 0 24-10.7 24-24s-10.7-24-24-24zm400 48v64h-80V80zm-128 0v64h-80V80zm-128 0v64H88V80zm328 224.1V352h-64v-47.9c0-17.7 14.3-32 32-32s32 14.3 32 32M352 400v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3"})
);

export default LanBridgeLockRegular;
