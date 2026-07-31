import React from 'react';

export const LanHexagonExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M383.8 16c25.8 0 49.7 13.8 62.5 36.2l96.2 168c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.2c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2L33.5 291.8c-12.7-22.2-12.7-49.4 0-71.5l96.2-168C142.5 29.8 166.4 16 192.2 16zM192.2 64c-8.6 0-16.6 4.6-20.8 12.1l-96.2 168c-4.2 7.4-4.2 16.5 0 23.8L171.4 436c4.3 7.5 12.2 12.1 20.8 12.1h191.6c8.6 0 16.6-4.6 20.8-12.1l96.3-168c4.2-7.4 4.2-16.5 0-23.8l-96.2-168c-4.3-7.6-12.3-12.2-20.9-12.2zM288 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256c18.2 0 32.7 15.5 31.4 33.7l-7.4 104c-.9 12.6-11.4 22.3-23.9 22.3s-23-9.7-23.9-22.3l-7.4-104c-1.5-18.2 13-33.7 31.2-33.7"})
);

export default LanHexagonExclamationRegular;
