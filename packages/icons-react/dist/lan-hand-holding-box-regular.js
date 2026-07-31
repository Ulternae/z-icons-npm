import React from 'react';

export const LanHandHoldingBoxRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 48h-48v73.7c0 3.5-2.8 6.3-6.3 6.3-1.1 0-2.2-.3-3.1-.8L296 100.6c-4.9-2.8-11-2.8-15.9 0l-46.6 26.6c-1 .5-2 .8-3.1.8-3.5 0-6.3-2.8-6.3-6.3V48h-48v144h224V48zm0-48c26.5 0 48 21.5 48 48v144c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM187.4 336c-7.9 0-15.6 2.3-22.2 6.7L85.3 396c-3.9 2.6-8.6 4-13.3 4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40.7l73.8-49.2C153 293.1 170 288 187.4 288H320c35.3 0 64 28.7 64 64 0 5.5-.7 10.9-2 16h10.6l69.9-47.9c33.5-23 79.4-12.9 100.3 21.9 19.2 32 10.1 73.5-20.7 94.5L462 491.1c-19.9 13.6-43.5 20.9-67.6 20.9H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h370.4c14.5 0 28.6-4.4 40.6-12.5l80-54.6c9.9-6.7 12.8-20 6.6-30.2-6.7-11.1-21.3-14.3-32-7l-76 52.1c-4 2.7-8.7 4.2-13.6 4.2H256c-13.3 0-24-10.7-24-24s10.7-24 24-24h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanHandHoldingBoxRegular;
