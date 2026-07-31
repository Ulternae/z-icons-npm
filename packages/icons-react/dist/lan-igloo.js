import React from 'react';

export const LanIgloo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M576 352v-32c0-159.1-128.9-288-288-288S0 160.9 0 320v96c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64zm-96 0h64v64c0 17.7-14.3 32-32 32H384v-96zm-192-96c-41.8 0-77.4 26.7-90.5 64H128V192h320v128h-69.5c-13.2-37.3-48.7-64-90.5-64m192-64h29.8c21.8 37.7 34.2 81.4 34.2 128h-64zm-413.8 0H96v128H32c0-46.6 12.5-90.3 34.2-128M352 160V72.1c54.4 14 101.8 45.4 135.9 87.9zm-32-94v94H88.1c46.9-58.5 119-96 199.9-96 10.8 0 21.5.7 32 2m-32 222c35.3 0 64 28.7 64 64v96H224v-96c0-35.3 28.7-64 64-64m-96 160H64c-17.7 0-32-14.3-32-32v-64h160z"})
);

export default LanIgloo;
