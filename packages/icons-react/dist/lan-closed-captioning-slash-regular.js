import React from 'react';

export const LanClosedCaptioningSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-61.4-61.4c21.6-10.4 36.5-32.3 36.5-57.8V128c0-35.3-28.7-64-64-64H129.8zM177.8 112H480c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16h-14.2l-52.3-52.3c20.2-8.4 34.5-28.4 34.5-51.7 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 4.4-3.6 8-8 8h-22.2L352 286.2V216c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8 0 13.3 10.7 24 24 24s24-10.7 24-24c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v22.2zm200.4 336-48-48H96c-8.8 0-16-7.2-16-16V149.8l-44-44c-2.6 6.9-4 14.4-4 22.2v256c0 35.3 28.7 64 64 64zM130.3 200.1c-1.5 5-2.3 10.4-2.3 15.9v80c0 30.9 25.1 56 56 56h32c18.1 0 34.1-8.5 44.4-21.8l-36.3-36.3c-.1.7-.1 1.4-.1 2.1 0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-50.2z"})
);

export default LanClosedCaptioningSlashRegular;
