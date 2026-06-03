import React from 'react';

export const LanHandshakeAltSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 640 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M73-24.9c-9.4-9.4-24.6-9.4-33.9 0S29.7-.3 39 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-91-91.2 99.1-99c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-53.8 53.8c-4.2-12.8-11.3-24.9-21.5-35.1L385 183c-9.4-9.4-24.6-9.4-33.9 0L316 218.1 269.9 172l39-39c13.4-13.4 31.6-21 50.6-21.1H419c14.2 0 28.1 4.2 39.9 12.1l23.8 16c8.4 5.6 19.3 5.3 27.4-.6l88-64c10.7-7.8 13.1-22.8 5.3-33.5s-22.8-13.1-33.5-5.3l-74.5 54.2-9.9-6.6C465.8 71 442.6 64 418.9 64H215.7c-15.6 0-30.9 3-45.1 8.8zm137.1 137.1c1.9-.1 3.8-.2 5.7-.2h46.3L236 138.1zM349.9 252l18.1-18.1 97.8 97.8c12 12 14.8 29.8 8.3 44.5zm86.6 222.2-36.1-36.1c-12.4 5-25.5 8.1-39 9.3L313 399c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l15 15h-3.8c-36.1 0-70.7-14.3-96.2-39.8L65 279c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l129.1 129.2c34.5 34.5 81.3 53.9 130.1 53.9h51.8l1 1 1-1h5.7c30.5 0 60.3-7.6 86.7-21.7z"})
);

export default LanHandshakeAltSlashRegular;
