import React from 'react';

export const LanIglooRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M528 416v-48H400v64h112c8.8 0 16-7.2 16-16m-176-64c0-35.3-28.7-64-64-64s-64 28.7-64 64v80h128zm-64-112c50.7 0 93.6 33.7 107.4 80H432V208H144v112h36.6c13.8-46.3 56.6-80 107.4-80m192-32v112h48c0-40.5-10-78.6-27.7-112zm-404.3 0C58 241.4 48 279.5 48 320h48V208zM320 82.1c-10.5-1.4-21.1-2.1-32-2.1-71.1 0-134.9 30.9-178.9 80H320zm48 11.5v66.3h98.9c-26.6-29.7-60.5-52.8-98.9-66.3M48 368v48c0 8.8 7.2 16 16 16h112v-64zm128 112H64c-35.3 0-64-28.7-64-64v-96C0 160.9 128.9 32 288 32s288 128.9 288 288v96c0 35.3-28.7 64-64 64z"})
);

export default LanIglooRegular;
