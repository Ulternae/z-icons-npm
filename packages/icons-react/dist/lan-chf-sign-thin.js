import React from 'react';

export const LanChfSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 146.4C0 100.9 36.9 64 82.4 64h3c33.7 0 63.5 21.5 74.2 53.5 1.4 4.2-.9 8.7-5.1 10.1s-8.7-.9-10.1-5.1c-8.5-25.4-32.2-42.5-59-42.5h-3C45.7 80 16 109.7 16 146.4v219.2c0 36.7 29.7 66.4 66.4 66.4h3c26.8 0 50.5-17.1 59-42.5 1.4-4.2 5.9-6.5 10.1-5.1s6.5 5.9 5.1 10.1c-10.7 32-40.5 53.5-74.2 53.5h-3C36.9 448 0 411.1 0 365.6zM216 64c4.4 0 8 3.6 8 8v168h160V72c0-4.4 3.6-8 8-8s8 3.6 8 8v368c0 4.4-3.6 8-8 8s-8-3.6-8-8V256H224v184c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8m232 8c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H464v160h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H464v184c0 4.4-3.6 8-8 8s-8-3.6-8-8z"})
);

export default LanChfSignThin;
