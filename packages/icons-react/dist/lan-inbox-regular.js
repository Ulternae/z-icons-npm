import React from 'react';

export const LanInboxRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M75.3 94c1-8 7.8-14 15.9-14h329.7c8 0 14.8 6 15.9 14l25 194h-85.2c-13.4 0-25.9 6.7-33.3 17.8L323.2 336H188.9l-20.1-30.2c-7.4-11.1-19.9-17.8-33.3-17.8H50.3zM48 336h83.2l20.1 30.2c7.4 11.1 19.9 17.8 33.3 17.8h142.9c13.4 0 25.9-6.7 33.3-17.8l20.1-30.2h83.2v80c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM91.2 32C59 32 31.8 55.9 27.7 87.8L.2 300.9l-.2 1.6V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V302.5l-.2-1.5-27.5-213.1C480.2 55.9 453 32 420.8 32z"})
);

export default LanInboxRegular;
