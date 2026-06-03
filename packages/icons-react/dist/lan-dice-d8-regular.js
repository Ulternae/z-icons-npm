import React from 'react';

export const LanDiceD8Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -10.2 576 536.25',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M253.2 4.8c18.9-20 50.8-20 69.7 0L543 237.1c18.2 19.3 17.4 49.7-1.9 67.9L321 512.9l-3.6 3.1c-17.3 13.4-41.5 13.4-58.8 0l-3.5-3.1L35 305c-18-17.1-19.9-44.9-5-64.2l3.2-3.8L253.3 4.7zM264 455.3V339.7l-155.4-31.1zm48-115.6v115.6l155.3-146.7zM82.8 254.5l181.3 36.3V63.2L82.8 254.6zm229.3 36.3 181.3-36.3L312.1 63.1v227.6z"})
);

export default LanDiceD8Regular;
