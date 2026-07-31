import React from 'react';

export const LanArrowDownUpLockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -0.025 576 544.025',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m253.7 421.7-88 88c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l74.3 74.3V264H56c-4.4 0-8-3.6-8-8s3.6-8 8-8h288V27.3l-74.3 74.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l88-88c3.1-3.1 8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-74.3-74.3v219c-2.3 5.7-4.1 11.6-5.4 17.6H168.1v220.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM168 8v184h-16V8c0-4.4 3.6-8 8-8s8 3.6 8 8m344 280.1c0-26.5-21.5-48-48-48s-48 21.5-48 48V352h96zM368 400v96c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32v.1H400v-.1c-17.7 0-32 14.3-32 32m160-111.9V352c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48v-63.9c0-35.3 28.7-64 64-64s64 28.7 64 64"})
);

export default LanArrowDownUpLockThin;
