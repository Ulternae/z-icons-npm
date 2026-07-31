import React from 'react';

export const LanAsteriskRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 0c13.3 0 24 10.7 24 24v190.3l164-95.1c11.5-6.7 26.2-2.7 32.8 8.7s2.7 26.2-8.7 32.8L271.8 256 436 351.2c11.5 6.6 15.4 21.3 8.7 32.8s-21.3 15.4-32.8 8.7l-163.9-95V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V297.7L36 392.8c-11.5 6.7-26.2 2.7-32.8-8.7S.5 357.9 12 351.2L176.2 256 12 160.8C.5 154.1-3.4 139.4 3.2 128s21.3-15.4 32.8-8.7l164 95V24c0-13.3 10.7-24 24-24"})
);

export default LanAsteriskRegular;
