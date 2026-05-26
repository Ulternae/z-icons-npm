import React from 'react';

export const LanGameBoard = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M390.5 32.3C422.8 35.6 448 62.9 448 96v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416V96c0-33.1 25.2-60.4 57.5-63.7L64 32h320zM32 416c0 17.7 14.3 32 32 32h40v-72H32zm104 32h72v-72h-72zm208 0h40c17.7 0 32-14.3 32-32v-40h-72zm-104 0h72v-72h-72zM32 344h72v-72H32zm104 0h72v-72h-72zm208 0h72v-72h-72zm-104 0h72v-72h-72zM32 240h72v-72H32zm104 0h72v-72h-72zm208 0h72v-72h-72zm-104 0h72v-72h-72zM64 64c-17.7 0-32 14.3-32 32v40h72V64zm72 72h72V64h-72zm208 0h72V96c0-17.7-14.3-32-32-32h-40zm-104 0h72V64h-72z"})
);

export default LanGameBoard;
