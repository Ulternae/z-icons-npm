import React from 'react';

export function LanCalendarExclamationRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M328 0c13.3 0 24 10.7 24 24v40h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h160V24c0-13.3 10.7-24 24-24M64 112c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zm160 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256c18.2 0 32.7 15.5 31.4 33.7l-7.4 104c-.9 12.6-11.4 22.3-23.9 22.3-12.6 0-23-9.7-23.9-22.3l-7.4-104c-1.5-18.2 13-33.7 31.2-33.7"})
  );
}

export default LanCalendarExclamationRegular;
