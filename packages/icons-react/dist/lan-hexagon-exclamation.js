import React from 'react';

export const LanHexagonExclamation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M383.8 16c25.8 0 49.7 13.8 62.5 36.2l96.2 168c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.2c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2L33.5 291.8c-12.7-22.2-12.7-49.4 0-71.5l96.2-168C142.5 29.8 166.4 16 192.2 16zM192.2 48c-14.3 0-27.6 7.7-34.7 20.1L61.3 236.2c-7 12.3-7 27.4 0 39.7l96.2 168c7.1 12.5 20.4 20.2 34.7 20.2h191.6c14.3 0 27.6-7.7 34.7-20.2l96.2-168c7-12.3 7-27.4 0-39.7L418.6 68.1C411.4 55.7 398.2 48 383.8 48zM288 384a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-256c13.5 0 24.3 11.4 23.5 24.9l-7.6 136c-.5 8.5-7.5 15.1-16 15.1s-15.5-6.6-16-15.1l-7.6-136c-.8-13.5 10-24.9 23.5-24.9z"})
);

export default LanHexagonExclamation;
