import React from 'react';

export const LanLiraSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M63.5 256H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h19.4C16.7 122.3 80.5 32 173.5 32h6.9c21.9 0 43.5 5.1 63.1 14.9l39.3 19.6c11.9 5.9 16.7 20.3 10.7 32.2s-20.3 16.7-32.2 10.7L222 89.8c-12.9-6.5-27.2-9.8-41.6-9.8h-6.9C109.6 80 67 146 93.3 204.2L95 208h169c13.3 0 24 10.7 24 24s-10.7 24-24 24H113.5c2.6 10.5 4.1 21.3 4.6 32H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H113.5c-3.8 15.3-9.7 30.1-17.7 44l-30.2 52H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-8.6 0-16.5-4.6-20.8-12s-4.3-16.6 0-24l50.9-88c3.7-6.4 6.8-13.1 9.2-20H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h46.1c-.7-10.8-2.9-21.6-6.6-32"})
);

export default LanLiraSignRegular;
