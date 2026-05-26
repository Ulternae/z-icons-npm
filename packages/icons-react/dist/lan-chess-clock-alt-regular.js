import React from 'react';

export const LanChessClockAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 40c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v32h72l6.5.3c32.3 3.3 57.5 30.6 57.5 63.7v224l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-448l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 384V160c0-33.1 25.2-60.4 57.5-63.7L64 96h328V64h-32c-13.3 0-24-10.7-24-24M88 32h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24s10.7-24 24-24m424 368c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16zM400 224a48 48 0 1 0 0 96 48 48 0 1 0 0-96m96 48a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-272 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-48-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})
);

export default LanChessClockAltRegular;
