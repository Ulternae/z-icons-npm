import React from 'react';

export const LanHexagonCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M383.8 16c25.8 0 49.7 13.8 62.5 36.2l96.2 168c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.2c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2L33.5 291.8c-12.7-22.2-12.7-49.4 0-71.5l96.2-168C142.5 29.8 166.4 16 192.2 16zM192.2 32c-20.1 0-38.6 10.8-48.6 28.2l-96.2 168c-9.9 17.2-9.9 38.4 0 55.6l96.2 168.1c10 17.4 28.5 28.2 48.6 28.2h191.6c20.1 0 38.6-10.8 48.6-28.2l96.2-168.1c9.9-17.2 9.9-38.4 0-55.6l-96.2-168C422.5 42.8 403.9 32 383.8 32zm193.2 128.4c2.6-3.6 7.6-4.3 11.2-1.8s4.4 7.6 1.8 11.2L262.5 356.7c-1.4 1.9-3.5 3.1-5.8 3.3s-4.6-.7-6.3-2.3l-72-72c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l65.3 65.3z"})
);

export default LanHexagonCheckThin;
