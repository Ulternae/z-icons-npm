import React from 'react';

export const LanAlignSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L409.8 344H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H361.8l-80-80H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H233.8l-80-80H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H105.8zM402.2 472l-48-48H88c-13.3 0-24 10.7-24 24s10.7 24 24 24zm-176-176H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h186.2zm-128-128H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h58.2z"})
);

export default LanAlignSlashRegular;
