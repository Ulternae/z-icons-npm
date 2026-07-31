import React from 'react';

export const LanArrowsAltHThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M123 19.6c2.3-2.3 5.4-3.6 8.7-3.6 6.8 0 12.3 5.5 12.3 12.3v199.4c0 6.8-5.5 12.3-12.3 12.3-3.3 0-6.4-1.3-8.7-3.6L17 130.3c-.6-.6-1-1.5-1-2.3s.3-1.7 1-2.3zM160 120V28.3C160 12.7 147.3 0 131.7 0c-7.5 0-14.7 3-20 8.3l-106 106C2 118 0 122.9 0 128s2 10 5.7 13.7l106 106c5.3 5.3 12.5 8.3 20 8.3 15.6 0 28.3-12.7 28.3-28.3V136h344c4.4 0 8-3.6 8-8s-3.6-8-8-8zM0 384c0 4.4 3.6 8 8 8h344v91.7c0 15.6 12.7 28.3 28.3 28.3 7.5 0 14.7-3 20-8.3l106-106c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7l-106-106c-5.3-5.3-12.5-8.3-20-8.3-15.6 0-28.3 12.7-28.3 28.3V376H8c-4.4 0-8 3.6-8 8m368 99.7V284.3c0-6.8 5.5-12.3 12.3-12.3 3.3 0 6.4 1.3 8.7 3.6l106 106.1c.6.6 1 1.5 1 2.3s-.3 1.7-1 2.3L389 492.4c-2.3 2.3-5.4 3.6-8.7 3.6-6.8 0-12.3-5.5-12.3-12.3"})
);

export default LanArrowsAltHThin;
