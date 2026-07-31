import React from 'react';

export const LanHandHoldingHeartRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m279.6 31 8.4 11.7 8.4-11.7c14.1-19.5 36.7-31 60.7-31C398.5 0 432 33.5 432 74.9v2.4c0 64.4-82 133.4-122.2 163.3-13 9.7-30.5 9.7-43.5 0-40.2-30-122.3-98.9-122.2-163.3v-2.4C144.1 33.5 177.6 0 219 0c24 0 46.6 11.5 60.7 31zm-92.2 305c-7.9 0-15.6 2.3-22.2 6.7L85.3 396c-3.9 2.6-8.6 4-13.3 4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40.7l73.8-49.2C153 293.1 170 288 187.4 288H320c35.3 0 64 28.7 64 64 0 5.5-.7 10.9-2 16h10.6l69.9-47.9c33.5-23 79.4-12.9 100.3 21.9 19.2 32 10.1 73.5-20.7 94.5L462 491.1c-19.9 13.6-43.5 20.9-67.6 20.9H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h370.4c14.5 0 28.6-4.4 40.6-12.5l80-54.6c9.9-6.7 12.8-20 6.6-30.2-6.7-11.1-21.3-14.3-32-7l-76 52.1c-4 2.7-8.7 4.2-13.6 4.2H256c-13.3 0-24-10.7-24-24s10.7-24 24-24h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanHandHoldingHeartRegular;
