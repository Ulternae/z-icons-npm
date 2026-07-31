import React from 'react';

export const LanPersonPinballRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M490.5-31.9C502.6-30.6 512-20.4 512-8v528c0 13.3-10.7 24-24 24s-24-10.7-24-24V400H208v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V285.9L70.8 171.2c-1.6-2-4-3.2-6.5-3.2-4.5 0-8.2 3.7-8.2 8.2v103.7c0 9.7 3.5 19.1 9.9 26.3L90.3 334l5 6.2c10.9 15 16.8 33.1 16.8 51.8l-.1 128c0 13.3-10.7 24-24 24s-24-10.7-24-24V392.1c0-8.5-2.7-16.7-7.6-23.5l-2.3-2.8L29.8 338C15.8 322 8 301.3 8 280V176.2C8 145.1 33.2 120 64.2 120c17.3 0 33.7 8 44.4 21.7L195.2 253l223.3-47L359 98.8c-4.6-8.3-7.1-17.7-7.1-27.2V-8.1l.1-2.5c1.4-12 11.6-21.4 24-21.4h112zM208 299.5V352h256V245.6zM400 71.7c0 1.4.3 2.7 1 3.9L464 189V16h-64zM64 80a56 56 0 1 1 0-112 56 56 0 1 1 0 112"})
);

export default LanPersonPinballRegular;
