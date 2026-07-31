import React from 'react';

export const LanDownFromBracket = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M207 505c9.4 9.4 24.6 9.4 33.9 0l144-144c6.9-6.9 8.9-17.2 5.2-26.2S377.7 320 368 320h-80V208c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v112H80c-9.7 0-18.5 5.8-22.2 14.8S56.2 354.1 63 361zm141.7-153L224 476.7 99.3 352H176c8.8 0 16-7.2 16-16V208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v128c0 8.8 7.2 16 16 16zM416 176c0 8.8 7.2 16 16 16s16-7.2 16-16V96c0-53-43-96-96-96H96C43 0 0 43 0 96v80c0 8.8 7.2 16 16 16s16-7.2 16-16V96c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64z"})
);

export default LanDownFromBracket;
